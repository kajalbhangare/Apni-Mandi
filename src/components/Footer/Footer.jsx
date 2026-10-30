// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      {/* Top Contact Section */}
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <p className="mb-0">
              To be delighted, Call us on <i className="fas fa-phone"></i> +91 7218 39 30 80 or write to us at contactus@apnimandi.in
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="row mb-4">
          {/* Fresh Veggies Column */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-success mb-3">Fresh Veggies</h5>
            <ul className="list-unstyled">
              <li><Link to="/category/Root Vegetables" className="text-white text-decoration-none">Root Vegetables</Link></li>
              <li><Link to="/category/Leafy Vegetables" className="text-white text-decoration-none">Leafy Vegetables</Link></li>
              <li><Link to="/category/Fruit Vegetables" className="text-white text-decoration-none">Fruit Vegetables</Link></li>
              <li><Link to="/category/Exotic Vegetables" className="text-white text-decoration-none">Exotic Vegetables</Link></li>
              <li><Link to="/category/Sprouts" className="text-white text-decoration-none">Sprouts</Link></li>
            </ul>
          </div>

          {/* Fresh Fruits Column */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-success mb-3">Fresh Fruits</h5>
            <ul className="list-unstyled">
              <li><Link to="/category/Fresh Fruits" className="text-white text-decoration-none">Fresh Fruits</Link></li>
              <li><Link to="/category/Seasonal Fruits" className="text-white text-decoration-none">Seasonal Fruits</Link></li>
              <li><Link to="/category/Exotic Fruits" className="text-white text-decoration-none">Exotic Fruits</Link></li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-success mb-3">Useful Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><a href="#" className="text-white text-decoration-none">Download Links</a></li>
              <li><Link to="/offers" className="text-white text-decoration-none">Offers</Link></li>
              <li><Link to="/help" className="text-white text-decoration-none">FAQ</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Cities & App Download Column */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-success mb-3">Top Cities</h5>
            <ul className="list-unstyled mb-4">
              <li><a href="#" className="text-white text-decoration-none">Pune</a></li>
            </ul>
            
            <h5 className="text-success mb-3">Download App</h5>
            <div className="mb-3">
              <a href="#" className="btn btn-outline-light btn-sm w-100 mb-2 text-decoration-none">
                <i className="fab fa-apple me-2"></i> AppStore
              </a>
              <a href="#" className="btn btn-outline-light btn-sm w-100 text-decoration-none">
                <i className="fab fa-google-play me-2"></i> Google Play
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Links */}
        <div className="row mb-3">
          <div className="col-12 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <Link to="/About" className="text-white text-decoration-none">About Us</Link>
              <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
              <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
              <Link to="/terms" className="text-white text-decoration-none">Terms Of Service</Link>
            </div>
          </div>
        </div>

        <hr className="my-3" />

        {/* Security Notice */}
        <div className="row mb-3">
          <div className="col-12 text-center">
            <p className="mb-2">
              <i className="fas fa-lock me-2 text-success"></i>
              <strong>SECURE TRANSACTIONS</strong>
            </p>
            <p className="small text-muted mb-2">Your data is protected and secure.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small text-muted mb-0">
              Designed & Developed By <strong>ScaleFull Technologies</strong>. 
              All rights reserved © Copyright 2023 <strong>ApniMandi</strong>. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;