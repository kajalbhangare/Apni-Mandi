import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  address: ''
};

const Signup = () => {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must contain at least 8 characters.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setSubmitting(true);
    try {
      const { confirmPassword, ...registrationData } = formData;
      await register(registrationData);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-success">Create Account</h2>
                <p className="text-muted">Join ApniMandi for fresh vegetables and fruits</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text" className="form-control" id="name" name="name"
                      value={formData.name} onChange={handleInputChange}
                      placeholder="Enter your full name" autoComplete="name"
                      minLength="2" maxLength="80" required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel" className="form-control" id="phone" name="phone"
                      value={formData.phone} onChange={handleInputChange}
                      placeholder="10-digit mobile number" autoComplete="tel"
                      inputMode="numeric" maxLength="10" pattern="[6-9][0-9]{9}" required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address (optional)</label>
                  <input
                    type="email" className="form-control" id="email" name="email"
                    value={formData.email} onChange={handleInputChange}
                    placeholder="Enter your email address" autoComplete="email"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password" className="form-control" id="password" name="password"
                      value={formData.password} onChange={handleInputChange}
                      placeholder="Minimum 8 characters" autoComplete="new-password"
                      minLength="8" required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password" className="form-control" id="confirmPassword" name="confirmPassword"
                      value={formData.confirmPassword} onChange={handleInputChange}
                      placeholder="Re-enter password" autoComplete="new-password" required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="form-label">Delivery Address</label>
                  <textarea
                    className="form-control" id="address" name="address"
                    value={formData.address} onChange={handleInputChange}
                    placeholder="Enter your delivery address" rows="3"
                    maxLength="300" required
                  />
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="terms" required />
                  <label className="form-check-label small text-muted" htmlFor="terms">
                    I agree to the <Link to="/terms" className="text-success">Terms &amp; Conditions</Link>
                    {' '}and <Link to="/privacy" className="text-success">Privacy Policy</Link>
                  </label>
                </div>

                {error && <div className="alert alert-danger" role="alert">{error}</div>}

                <button type="submit" className="btn btn-success w-100 py-2 mb-3" disabled={submitting}>
                  {submitting ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted">
                  Already have an account?{' '}
                  <Link to="/login" className="text-success text-decoration-none fw-semibold">Login Now</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-muted small mb-1">Designed &amp; Developed By Spritsch Solutions</p>
            <p className="text-muted small">@ Copyright 2023 Apni Mandi. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
