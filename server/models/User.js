import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 80
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[6-9]\d{9}$/
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    sparse: true,
    unique: true,
    default: undefined
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
