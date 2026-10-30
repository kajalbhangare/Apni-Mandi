// src/components/Header/Header.js
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Dispatch custom event with the search query
    const event = new CustomEvent('headerSearch', { detail: searchQuery });
    window.dispatchEvent(event);
  };

  return (
    <header className="header">
      <div className="top-bar bg-success text-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center">
                <img 
                  src="/apnimandi.png" 
                  alt="ApniMandi Logo" 
                  style={{ height: '50px', marginRight: '30px' }} 
                />
                <div className="d-flex align-items-center">
                  <div className="location-selector d-flex align-items-center me-3">
                    <i className="fas fa-map-marker-alt me-1"></i>
                    <span>Pune</span>
                  </div>
                  <div>
                    <i className="fas fa-phone-alt me-2"></i> +91 7218393080
                    <i className="fas fa-envelope ms-3 me-2"></i> info@apnimandi.in
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="col-md-4">
              <div className="search-bar input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search for fruits, vegetables, grains..." 
                  aria-label="Search products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-light" type="button" onClick={handleSearch}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
