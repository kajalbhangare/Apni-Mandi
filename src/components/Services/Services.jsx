// src/components/Services/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "fas fa-truck",
      title: "Free Delivery",
      description: "We deliver fresh products to your doorstep with no delivery charges on orders above ₹500"
    },
    {
      icon: "fas fa-seedling",
      title: "100% Organic",
      description: "All our products are certified organic and grown without harmful pesticides"
    },
    {
      icon: "fas fa-undo",
      title: "Easy Returns",
      description: "Not satisfied with your order? We offer easy returns within 24 hours"
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to assist you"
    }
  ];

  return (
    <section className="services py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <div className="service-icon mb-3">
                    <i className={service.icon}></i>
                  </div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;