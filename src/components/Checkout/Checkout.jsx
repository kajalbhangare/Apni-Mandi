// src/components/Checkout/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    upiId: ''
  });

  const deliveryCharge = cartTotal > 500 ? 0 : 40;
  const tax = cartTotal * 0.05; // 5% tax
  const finalTotal = cartTotal + deliveryCharge + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
          <h3>Your cart is empty</h3>
          <p>Add some products to checkout</p>
          <Link to="/" className="btn btn-success">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="success-animation">
            <i className="fas fa-check-circle text-success fa-5x mb-4"></i>
          </div>
          <h2 className="text-success mb-3">Order Placed Successfully!</h2>
          <p className="lead mb-4">Thank you for your order. Your order number is #123456</p>
          <p className="text-muted mb-4">We've sent a confirmation email to {formData.email}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link to="/" className="btn btn-success me-md-2">Continue Shopping</Link>
            <Link to="/orders" className="btn btn-outline-success">View Orders</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Delivery Address</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address *</label>
                  <textarea
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">State *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">PIN Code *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Payment Method</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <label className="form-check-label">
                    <i className="fas fa-credit-card me-2"></i> Credit/Debit Card
                  </label>
                </div>
                
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                  />
                  <label className="form-check-label">
                    <i className="fas fa-mobile-alt me-2"></i> UPI
                  </label>
                </div>
                
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <label className="form-check-label">
                    <i className="fas fa-money-bill-wave me-2"></i> Cash on Delivery
                  </label>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="payment-details">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label">Card Number *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 5678 9012 3456"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label">Name on Card *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="John Doe"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Expiry Date *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YY"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">CVV *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="123"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="payment-details">
                  <div className="mb-3">
                    <label className="form-label">UPI ID *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="yourname@upi"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="alert alert-info">
                    <small>You will be redirected to your UPI app for payment confirmation</small>
                  </div>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="payment-details">
                  <div className="alert alert-info">
                    <small>Pay with cash when your order is delivered</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="order-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery</span>
                <span>{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong className="text-success">₹{finalTotal.toFixed(2)}</strong>
              </div>

              <button 
                className="btn btn-success w-100 py-2"
                onClick={handleSubmit}
              >
                <i className="fas fa-lock me-2"></i>
                Place Order
              </button>
              
              <Link to="/cart" className="btn btn-outline-success w-100 mt-2">
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;