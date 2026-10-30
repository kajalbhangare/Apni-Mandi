// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartAuth } from '../../hooks/useCartAuth'; // Use the new hook
import CategorySelector from '../CategorySelector/CategorySelector';
import './Navbar.css';

const Navbar = () => {
  const { cartCount, user, logout } = useCartAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="text-success fw-bold">Apni</span>Mandi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <CategorySelector />
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Help</Link>
            </li>
            <li className="nav-item">
  <Link className="nav-link" to="/orders">My Orders</Link>
</li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="me-3">
              <i className="fas fa-phone-alt me-1 text-success"></i>
              <span>+91 7218393080</span>
            </div>
            
            {user ? (
              <div className="dropdown me-3">
                <button className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fas fa-user me-1"></i> {user.name}
                </button>
                <ul className="dropdown-menu">
                  <li><span className="dropdown-item-text">Welcome, {user.name}</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline-success me-3">
                <i className="fas fa-user me-1"></i>Login
              </Link>
            )}
            
            <Link to="/cart" className="btn btn-success position-relative">
              <i className="fas fa-shopping-cart me-1"></i>Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;