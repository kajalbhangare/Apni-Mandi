// src/components/TrackOrder/TrackOrder.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TrackOrder.css';

const TrackOrder = () => {
  const { trackingId } = useParams();
  const [trackingNumber, setTrackingNumber] = useState(trackingId || '');

  // Sample tracking data
  const trackingData = {
    'TRK-789012': {
      orderId: 'ORD-123456',
      status: 'delivered',
      steps: [
        { status: 'ordered', title: 'Order Placed', description: 'Your order has been received', time: '2024-02-15 10:30', completed: true },
        { status: 'confirmed', title: 'Order Confirmed', description: 'Order has been confirmed', time: '2024-02-15 11:15', completed: true },
        { status: 'processing', title: 'Processing', description: 'Items are being prepared', time: '2024-02-15 14:20', completed: true },
        { status: 'shipped', title: 'Shipped', description: 'Order has been dispatched', time: '2024-02-15 16:45', completed: true },
        { status: 'out_for_delivery', title: 'Out for Delivery', description: 'Driver is on the way', time: '2024-02-16 09:30', completed: true },
        { status: 'delivered', title: 'Delivered', description: 'Order has been delivered', time: '2024-02-16 12:15', completed: true }
      ],
      deliveryAddress: '123 Main Street, Pune, Maharashtra - 411001',
      estimatedDelivery: '2024-02-16 12:00-13:00',
      deliveryAgent: { name: 'Rajesh Kumar', phone: '+91 9876543210' }
    },
    'TRK-789013': {
      orderId: 'ORD-123457',
      status: 'shipped',
      steps: [
        { status: 'ordered', title: 'Order Placed', description: 'Your order has been received', time: '2024-02-14 09:15', completed: true },
        { status: 'confirmed', title: 'Order Confirmed', description: 'Order has been confirmed', time: '2024-02-14 10:00', completed: true },
        { status: 'processing', title: 'Processing', description: 'Items are being prepared', time: '2024-02-14 13:45', completed: true },
        { status: 'shipped', title: 'Shipped', description: 'Order has been dispatched', time: '2024-02-15 11:30', completed: true },
        { status: 'out_for_delivery', title: 'Out for Delivery', description: 'Driver is on the way', time: null, completed: false },
        { status: 'delivered', title: 'Delivered', description: 'Order has been delivered', time: null, completed: false }
      ],
      deliveryAddress: '456 Oak Avenue, Pune, Maharashtra - 411002',
      estimatedDelivery: '2024-02-16 15:00-16:00',
      deliveryAgent: { name: 'Suresh Patel', phone: '+91 9876543211' }
    }
  };

  const trackingInfo = trackingData[trackingNumber] || null;

  const getStatusIcon = (status) => {
    const icons = {
      ordered: 'fa-shopping-cart',
      confirmed: 'fa-check-circle',
      processing: 'fa-cog',
      shipped: 'fa-shipping-fast',
      out_for_delivery: 'fa-truck',
      delivered: 'fa-home'
    };
    return icons[status] || 'fa-info-circle';
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="mb-3">Track Your Order</h2>
            <p className="text-muted">Enter your tracking number to see the current status of your delivery</p>
          </div>

          {/* Tracking Input */}
          <div className="card mb-5">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Tracking Number (e.g., TRK-789012)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                  />
                </div>
                <div className="col-md-4">
                  <button 
                    className="btn btn-success btn-lg w-100"
                    disabled={!trackingNumber}
                  >
                    <i className="fas fa-search me-2"></i>Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          {trackingInfo ? (
            <>
              {/* Order Summary */}
              <div className="card mb-4">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">Order Information</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Order ID:</strong> {trackingInfo.orderId}</p>
                      <p><strong>Tracking Number:</strong> {trackingNumber}</p>
                      <p><strong>Status:</strong> 
                        <span className={`badge bg-${
                          trackingInfo.status === 'delivered' ? 'success' : 
                          trackingInfo.status === 'shipped' ? 'primary' : 'warning'
                        } ms-2`}>
                          {trackingInfo.status}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Delivery Address:</strong></p>
                      <p className="text-muted">{trackingInfo.deliveryAddress}</p>
                      {trackingInfo.estimatedDelivery && (
                        <p><strong>Estimated Delivery:</strong> {trackingInfo.estimatedDelivery}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="card">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Delivery Progress</h5>
                </div>
                <div className="card-body">
                  <div className="tracking-timeline">
                    {trackingInfo.steps.map((step, index) => (
                      <div key={index} className={`timeline-step ${step.completed ? 'completed' : ''}`}>
                        <div className="timeline-icon">
                          <i className={`fas ${getStatusIcon(step.status)} ${step.completed ? 'text-white' : 'text-muted'}`}></i>
                        </div>
                        <div className="timeline-content">
                          <h6 className="mb-1">{step.title}</h6>
                          <p className="text-muted mb-1 small">{step.description}</p>
                          {step.time && <small className="text-muted">{step.time}</small>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Delivery Agent Info */}
              {trackingInfo.deliveryAgent && (
                <div className="card mt-4">
                  <div className="card-header bg-info text-white">
                    <h5 className="mb-0">Delivery Agent</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="agent-avatar me-3">
                        <i className="fas fa-user-circle fa-3x text-info"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">{trackingInfo.deliveryAgent.name}</h6>
                        <p className="text-muted mb-1">Delivery Partner</p>
                        <p className="mb-0">
                          <i className="fas fa-phone me-2"></i>
                          {trackingInfo.deliveryAgent.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : trackingNumber ? (
            <div className="text-center py-5">
              <i className="fas fa-search fa-4x text-muted mb-3"></i>
              <h4>Tracking number not found</h4>
              <p className="text-muted">Please check your tracking number and try again</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;