// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button 
              type="button" 
              data-bs-target="#carouselExampleIndicators" 
              data-bs-slide-to="0" 
              className="active" 
              aria-current="true" 
              aria-label="Slide 1"
            ></button>
            <button 
              type="button" 
              data-bs-target="#carouselExampleIndicators" 
              data-bs-slide-to="1" 
              aria-label="Slide 2"
            ></button>
            <button 
              type="button" 
              data-bs-target="#carouselExampleIndicators" 
              data-bs-slide-to="2" 
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                className="d-block w-100" 
                alt="Fresh vegetables"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Fresh Organic Vegetables</h2>
                <p>Direct from farm to your table</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                className="d-block w-100" 
                alt="Fresh fruits"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Seasonal Fruits</h2>
                <p>Sweet and nutritious</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                className="d-block w-100" 
                alt="Farm fresh"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Farm Fresh Produce</h2>
                <p>100% organic and pesticide-free</p>
              </div>
            </div>
          </div>
          <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;