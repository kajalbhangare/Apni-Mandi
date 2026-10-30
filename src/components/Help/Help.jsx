// src/components/Help/Help.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Help.css';

const Help = () => {
  const [activeCategory, setActiveCategory] = useState('Account Related');

  const faqCategories = [
    'Account Related',
    'Payment',
    'Delivery Related',
    'Order Related'
  ];

  const faqData = {
    'Account Related': [
      {
        question: 'How do I create an account?',
        answer: 'To create an account, click on the "Sign Up" button at the top right corner of the page and fill in your details.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.'
      }
    ],
    'Payment': [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept credit/debit cards, UPI, net banking, and cash on delivery.'
      }
    ],
    'Delivery Related': [
      {
        question: 'What are your delivery timings?',
        answer: 'We deliver from 7 AM to 10 PM daily, except Sundays.'
      }
    ],
    'Order Related': [
      {
        question: 'How can I track my order?',
        answer: 'You can track your order from the "My Orders" section in your account.'
      }
    ]
  };

  return (
    <section className="help py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <Link to="/" className="btn btn-outline-success">
              <i className="fas fa-arrow-left me-2"></i> Back to Home
            </Link>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-12">
            <div className="help-header text-center mb-5">
              <h1 className="mb-3">Frequently Asked Questions</h1>
              <p className="lead">
                FAQs Kindly check the FAQ below if you are not very familiar with the functioning of this website. 
                If your query is of urgent nature and is different from the set of questions then do write to us at 
                <strong> contactus@veggiemarket.in</strong> or call us on <strong>+91 7218393080</strong> between 
                7 am & 10 pm on all days excluding Sunday to get our immediate help.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="faq-categories">
              <h3 className="mb-4">Registration</h3>
              <div className="list-group">
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    className={`list-group-item list-group-item-action ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="faq-content">
              <h3 className="mb-4">{activeCategory}</h3>
              <div className="accordion" id="faqAccordion">
                {faqData[activeCategory].map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="contact-info text-center p-4 bg-light rounded">
              <h4 className="mb-3">Still need help?</h4>
              <p className="mb-2">
                Email us at: <strong>contactus@apnimandi.in</strong>
              </p>
              <p className="mb-2">
                Call us at: <strong>+91 7218393080</strong>
              </p>
              <p>
                Available: <strong>7 AM - 10 PM (Monday - Saturday)</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;