import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('password');
  const [formData, setFormData] = useState({ phone: '', password: '', otp: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (loginMethod === 'otp') {
      setError('OTP login is not configured yet. Please sign in using your password.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setSubmitting(true);
    try {
      await login({ phone: formData.phone.trim(), password: formData.password });
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleLoginMethod = () => {
    setLoginMethod((method) => method === 'password' ? 'otp' : 'password');
    setError('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-success">Login Now</h2>
                <p className="text-muted">Please Login to Continue Our App</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Enter Phone Number</label>
                  <input
                    type="tel" className="form-control" id="phone" name="phone"
                    value={formData.phone} onChange={handleInputChange}
                    placeholder="Enter your 10-digit phone number"
                    autoComplete="tel" inputMode="numeric" maxLength="10"
                    pattern="[6-9][0-9]{9}" required
                  />
                </div>

                {loginMethod === 'password' ? (
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter Password</label>
                    <input
                      type="password" className="form-control" id="password" name="password"
                      value={formData.password} onChange={handleInputChange}
                      placeholder="Enter your password" autoComplete="current-password" required
                    />
                  </div>
                ) : (
                  <div className="alert alert-info">
                    OTP login is not available yet. Switch back to password login.
                  </div>
                )}

                {error && <div className="alert alert-danger" role="alert">{error}</div>}

                <button type="submit" className="btn btn-success w-100 py-2 mb-3" disabled={submitting}>
                  {submitting ? 'Please wait...' : loginMethod === 'password' ? 'Sign In With Password' : 'OTP Login Unavailable'}
                </button>

                {loginMethod === 'password' && (
                  <div className="text-center mb-3">
                    <Link to="/forgot-password" className="text-decoration-none text-success">Forgot Password?</Link>
                  </div>
                )}

                <div className="text-center">
                  <button type="button" className="btn btn-outline-success btn-sm" onClick={toggleLoginMethod}>
                    {loginMethod === 'password' ? 'Sign in With OTP' : 'Sign In With Password'}
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-success text-decoration-none fw-semibold">Sign Up Now</Link>
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

export default Login;
