// src/components/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about py-5">
      <div className="container">
        {/* About Mandai Section */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <h2 className="text-success mb-4">About Us</h2>
            <h3 className="mb-4">About ApniMandi</h3>
            <h4 className="text-muted mb-4">Customers Deserve Better</h4>
            <p className="lead">
              ApniMandi is India's fastest growing online Vegetable and Fruit store. With over 200+ 
              products you will find everything you are looking for right from Fresh Fruits and 
              Vegetables to Seasoning and Exotic Fruits and Vegetables - we have it all.
            </p>
            <p>
              Choose from a wide range of options in every category, exclusively handpicked to help you 
              find the best quality available at the lowest prices. Select a date slot for delivery and your 
              order will be delivered right to your doorstep, anywhere in Pune.
            </p>
            <p>
              You can pay online using your debit / credit card/ UPI or by cash on delivery.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Fresh vegetables" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <hr className="my-5" />

        {/* How to Order Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-5">
            <h2 className="text-success">How Do I Order?</h2>
          </div>
          
          <div className="col-lg-6">
            <div className="order-steps">
              <div className="step-item mb-4">
                <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center">
                  1
                </div>
                <div className="step-content">
                  <h5>Browse Products</h5>
                  <p>Visit apnimandi.in for products or use the search feature</p>
                </div>
              </div>

              <div className="step-item mb-4">
                <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center">
                  2
                </div>
                <div className="step-content">
                  <h5>Add to Basket</h5>
                  <p>Add items to your shopping basket</p>
                </div>
              </div>

              <div className="step-item mb-4">
                <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center">
                  3
                </div>
                <div className="step-content">
                  <h5>Choose Delivery Time</h5>
                  <p>Choose a convenient delivery time from our 5 slots* a day</p>
                </div>
              </div>

              <div className="step-item mb-4">
                <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center">
                  4
                </div>
                <div className="step-content">
                  <h5>Select Payment</h5>
                  <p>Select suitable payment option (Cash, Master, Credit Card, Discover, UPI)</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center">
                  5
                </div>
                <div className="step-content">
                  <h5>Home Delivery</h5>
                  <p>Your products will be home-delivered as per your order</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="happy-customers text-center">
              <h3 className="text-success mb-4">Happy Customers</h3>
              <img 
                src="https://images.unsplash.com/photo-1566842600175-97dca3dfc3c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Happy customers" 
                className="img-fluid rounded shadow mb-4"
              />
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* Why Choose Us Section */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="text-success">Why To Choose Us?</h2>
            <p className="lead">All across our clients choose our Fresh Fruits and Vegetables because of unique properties such as:</p>
          </div>

          <div className="col-lg-6">
            <div className="benefits-list">
              <div className="benefit-item mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <span>These are absolutely fresh</span>
                </div>
              </div>
              <div className="benefit-item mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <span>These comply with standards of the agricultural domain</span>
                </div>
              </div>
              <div className="benefit-item mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <span>These are sourced from trusted farmers of the country</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="benefits-list">
              <div className="benefit-item mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <span>These are appreciated for their chemical free cultivation</span>
                </div>
              </div>
              <div className="benefit-item mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <span>These are cleaned prior to delivery</span>
                </div>
              </div>
              <div className="benefit-item mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                  <span>These are the lowest cost with best quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;