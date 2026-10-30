// src/components/AuthModal/AuthModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AuthModal = () => {
  const { showLoginModal, setShowLoginModal } = useAuth();

  if (!showLoginModal) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login Required</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setShowLoginModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <i className="fas fa-shopping-cart fa-3x text-success mb-3"></i>
              <h4>Please Login to Continue</h4>
              <p className="text-muted mb-4">
                You need to be logged in to add items to your cart
              </p>
              
              <div className="d-grid gap-2">
                <Link 
                  to="/login" 
                  className="btn btn-success btn-lg"
                  onClick={() => setShowLoginModal(false)}
                >
                  <i className="fas fa-sign-in-alt me-2"></i> Login Now
                </Link>
                
                <Link 
                  to="/signup" 
                  className="btn btn-outline-success"
                  onClick={() => setShowLoginModal(false)}
                >
                  <i className="fas fa-user-plus me-2"></i> Create New Account
                </Link>
                
                <button 
                  className="btn btn-link text-muted"
                  onClick={() => setShowLoginModal(false)}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;