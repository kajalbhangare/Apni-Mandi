// src/components/Orders/Orders.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Sample order data
  const orders = [
    {
      id: "ORD-123456",
      date: "2024-02-15",
      status: "delivered",
      total: 1850,
      items: [
        { name: "Organic Tomatoes", quantity: 2, price: 80 },
        { name: "Fresh Apples", quantity: 1, price: 120 },
        { name: "Green Cucumbers", quantity: 3, price: 40 },
      ],
      deliveryAddress: "123 Main Street, Pune, Maharashtra - 411001",
      paymentMethod: "Credit Card",
      trackingId: "TRK-789012",
    },
    {
      id: "ORD-123457",
      date: "2024-02-14",
      status: "shipped",
      total: 2450,
      items: [
        { name: "Bell Peppers", quantity: 1, price: 60 },
        { name: "Mangoes", quantity: 2, price: 120 },
      ],
      deliveryAddress: "456 Oak Avenue, Pune, Maharashtra - 411002",
      paymentMethod: "UPI",
      trackingId: "TRK-789013",
    },
    {
      id: "ORD-123458",
      date: "2024-02-13",
      status: "processing",
      total: 950,
      items: [
        { name: "Spinach", quantity: 1, price: 20 },
        { name: "Coriander", quantity: 2, price: 13 },
      ],
      deliveryAddress: "789 Pine Road, Pune, Maharashtra - 411003",
      paymentMethod: "Cash on Delivery",
      trackingId: "TRK-789014",
    },
  ];

  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  const getStatusBadge = (status) => {
    const statusConfig = {
      delivered: {
        class: "success",
        text: "Delivered",
        icon: "fa-check-circle",
      },
      shipped: { class: "primary", text: "Shipped", icon: "fa-shipping-fast" },
      processing: { class: "warning", text: "Processing", icon: "fa-cog" },
      cancelled: {
        class: "danger",
        text: "Cancelled",
        icon: "fa-times-circle",
      },
    };
    const config = statusConfig[status];
    return (
      <span className={`badge bg-${config.class} px-3 py-2`}>
        <i className={`fas ${config.icon} me-2`}></i>
        {config.text}
      </span>
    );
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">My Orders</h2>
            <Link to="/" className="btn btn-outline-success">
              <i className="fas fa-arrow-left me-2"></i>Continue Shopping
            </Link>
          </div>

          {/* Order Status Tabs */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2">
                <button
                  className={`btn ${
                    activeTab === "all" ? "btn-success" : "btn-outline-success"
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  All Orders
                </button>
                <button
                  className={`btn ${
                    activeTab === "processing"
                      ? "btn-warning"
                      : "btn-outline-warning"
                  }`}
                  onClick={() => setActiveTab("processing")}
                >
                  Processing
                </button>
                <button
                  className={`btn ${
                    activeTab === "shipped"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("shipped")}
                >
                  Shipped
                </button>
                <button
                  className={`btn ${
                    activeTab === "delivered"
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => setActiveTab("delivered")}
                >
                  Delivered
                </button>
              </div>
            </div>
          </div>

          {/* Orders List */}
          {filteredOrders.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-box-open fa-4x text-muted mb-3"></i>
              <h4>No orders found</h4>
              <p className="text-muted">You haven't placed any orders yet</p>
              <Link to="/" className="btn btn-success">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="row">
              {filteredOrders.map((order) => (
                <div key={order.id} className="col-12 mb-4">
                  <div className="card order-card">
                    <div className="card-header bg-light d-flex justify-content-between align-items-center">
                      <div>
                        <strong>Order ID: {order.id}</strong>
                        <span className="text-muted ms-3">
                          Placed on {order.date}
                        </span>
                      </div>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h6>Items:</h6>
                          {order.items.map((item, index) => (
                            <div
                              key={index}
                              className="d-flex justify-content-between mb-2"
                            >
                              <span>
                                {item.quantity} × {item.name}
                              </span>
                              <span>₹{item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <h6>Delivery Address:</h6>
                            <p className="text-muted small mb-0">
                              {order.deliveryAddress}
                            </p>
                          </div>
                          <div className="mb-3">
                            <h6>Payment Method:</h6>
                            <span className="badge bg-secondary">
                              {order.paymentMethod}
                            </span>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <strong className="text-success">
                            Total: ₹{order.total}
                          </strong>
                        </div>
                        <div className="d-flex gap-2">
                          <Link
                            to={`/track-order/${order.trackingId}`}
                            className="btn btn-outline-primary btn-sm"
                          >
                            <i className="fas fa-map-marker-alt me-2"></i>Track
                            Order
                          </Link>
                          <button className="btn btn-outline-success btn-sm">
                            <i className="fas fa-redo me-2"></i>Reorder
                          </button>
                          <Link
                            to={`/invoice/${order.id}`}
                            className="btn btn-outline-secondary btn-sm"
                            target="_blank"
                          >
                            <i className="fas fa-file-invoice me-2"></i>Invoice
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
