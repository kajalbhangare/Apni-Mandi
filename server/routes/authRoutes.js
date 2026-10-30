import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

function createToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

function publicUser(user) {
  return {
    id: user._id,
    name: user.name,
    phone: user.phone,
    email: user.email || '',
    address: user.address
  };
}

router.post('/register', async (req, res, next) => {
  try {
    const { name, phone, email, password, address } = req.body || {};
    const cleanName = String(name || '').trim();
    const cleanPhone = String(phone || '').trim();
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanAddress = String(address || '').trim();

    if (cleanName.length < 2) {
      return res.status(400).json({ message: 'Please enter your full name (at least 2 characters).' });
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return res.status(400).json({ message: 'Please enter a valid 10-digit Indian mobile number.' });
    }
    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }
    if (typeof password !== 'string' || password.length < 8) {
      return res.status(400).json({ message: 'Password must contain at least 8 characters.' });
    }
    if (cleanAddress.length < 5) {
      return res.status(400).json({ message: 'Please enter a complete delivery address.' });
    }

    const existingPhone = await User.findOne({ phone: cleanPhone });
    if (existingPhone) {
      return res.status(409).json({ message: 'This phone number is already registered. Please log in.' });
    }

    if (cleanEmail) {
      const existingEmail = await User.findOne({ email: cleanEmail });
      if (existingEmail) {
        return res.status(409).json({ message: 'This email address is already registered.' });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name: cleanName,
      phone: cleanPhone,
      ...(cleanEmail ? { email: cleanEmail } : {}),
      password: hashedPassword,
      address: cleanAddress
    });

    return res.status(201).json({
      message: 'Account created successfully.',
      token: createToken(user._id.toString()),
      user: publicUser(user)
    });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ message: 'Phone number or email is already registered.' });
    }
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const phone = String(req.body?.phone || '').trim();
    const password = req.body?.password;

    if (!/^[6-9]\d{9}$/.test(phone) || typeof password !== 'string' || !password) {
      return res.status(400).json({ message: 'Please enter your registered phone number and password.' });
    }

    const user = await User.findOne({ phone }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid phone number or password.' });
    }

    return res.json({
      message: 'Login successful.',
      token: createToken(user._id.toString()),
      user: publicUser(user)
    });
  } catch (error) {
    next(error);
  }
});

router.get('/me', requireAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User account not found.' });
    }
    return res.json({ user: publicUser(user) });
  } catch (error) {
    next(error);
  }
});

export default router;
