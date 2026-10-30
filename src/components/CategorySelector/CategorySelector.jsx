// src/components/CategorySelector/CategorySelector.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategorySelector.css';

const CategorySelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Root Vegetables",
    "Leafy Vegetables", 
    "Fruit Vegetables",
    "Exotic Vegetables",
    "Sprouts",
    "Fresh Fruits",
    "Seasonal Fruits",
    "Exotic Fruits"
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-selector">
      <a 
        className="nav-link dropdown-toggle" 
        href="#"
        onClick={toggleDropdown}
      >
        Select Category
      </a>

      {isOpen && (
        <div className="category-dropdown">
          <div className="container">
            <div className="row">
              {categories.map((category, index) => (
                <div key={index} className="col-md-4 col-6 mb-3">
                  <Link 
                    to={`/category/${category}`} 
                    className="category-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {category}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;