// src/components/Invoice/Invoice.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Invoice.css';

const Invoice = () => {
  const { orderId } = useParams();

  // Sample invoice data
  const invoiceData = {
    'ORD-123456': {
      orderId: 'ORD-123456',
      date: 'February 15, 2024',
      status: 'Delivered',
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        address: '123 Main Street, Pune, Maharashtra - 411001'
      },
      items: [
        { id: 1, name: 'Organic Tomatoes', quantity: 2, price: 80, total: 160 },
        { id: 2, name: 'Fresh Apples', quantity: 1, price: 120, total: 120 },
        { id: 3, name: 'Green Cucumbers', quantity: 3, price: 40, total: 120 }
      ],
      payment: {
        method: 'Credit Card',
        transactionId: 'TXN-789012',
        status: 'Completed'
      },
      delivery: {
        charge: 0,
        date: 'February 16, 2024',
        slot: '12:00 PM - 1:00 PM'
      },
      subtotal: 400,
      discount: 50,
      tax: 35,
      total: 385
    },
    'ORD-123457': {
      orderId: 'ORD-123457',
      date: 'February 14, 2024',
      status: 'Shipped',
      customer: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+91 9876543211',
        address: '456 Oak Avenue, Pune, Maharashtra - 411002'
      },
      items: [
        { id: 4, name: 'Bell Peppers', quantity: 1, price: 60, total: 60 },
        { id: 5, name: 'Mangoes', quantity: 2, price: 120, total: 240 }
      ],
      payment: {
        method: 'UPI',
        transactionId: 'TXN-789013',
        status: 'Completed'
      },
      delivery: {
        charge: 40,
        date: 'February 16, 2024',
        slot: '3:00 PM - 4:00 PM'
      },
      subtotal: 300,
      discount: 30,
      tax: 26.5,
      total: 336.5
    }
  };

  const invoice = invoiceData[orderId];

  if (!invoice) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <i className="fas fa-file-invoice fa-4x text-muted mb-4"></i>
          <h3>Invoice Not Found</h3>
          <p className="text-muted">The requested invoice could not be found.</p>
          <Link to="/orders" className="btn btn-success">View Orders</Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simulate PDF download
    alert('PDF download would start here. In a real application, this would generate and download a PDF file.');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Invoice Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="text-success mb-1">ApniMandi</h2>
              <p className="text-muted">Fresh Vegetables & Fruits</p>
            </div>
            <div className="text-end">
              <h4 className="text-success">INVOICE</h4>
              <p className="text-muted mb-0">#{invoice.orderId}</p>
            </div>
          </div>

          {/* Invoice Actions */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-success me-2">{invoice.status}</span>
                  <span className="text-muted">Issued on {invoice.date}</span>
                </div>
                <div className="btn-group">
                  <button className="btn btn-outline-success" onClick={handlePrint}>
                    <i className="fas fa-print me-2"></i>Print
                  </button>
                  <button className="btn btn-success" onClick={handleDownload}>
                    <i className="fas fa-download me-2"></i>Download PDF
                  </button>
                  <Link to="/orders" className="btn btn-outline-secondary">
                    <i className="fas fa-arrow-left me-2"></i>Back to Orders
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Content */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                {/* Bill From */}
                <div className="col-md-6">
                  <h6 className="text-success">Bill From:</h6>
                  <p className="mb-1"><strong>ApniMandi</strong></p>
                  <p className="mb-1">123 Market Street</p>
                  <p className="mb-1">Pune, Maharashtra - 411001</p>
                  <p className="mb-1">Phone: +91 7030 73 73 73</p>
                  <p className="mb-0">Email: info@apnimandi.in</p>
                </div>

                {/* Bill To */}
                <div className="col-md-6">
                  <h6 className="text-success">Bill To:</h6>
                  <p className="mb-1"><strong>{invoice.customer.name}</strong></p>
                  <p className="mb-1">{invoice.customer.address}</p>
                  <p className="mb-1">Phone: {invoice.customer.phone}</p>
                  <p className="mb-0">Email: {invoice.customer.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h6 className="mb-0">Order Details</h6>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.price}</td>
                        <td>₹{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Payment & Delivery Info */}
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h6 className="mb-0">Payment Information</h6>
                </div>
                <div className="card-body">
                  <p className="mb-2"><strong>Method:</strong> {invoice.payment.method}</p>
                  <p className="mb-2"><strong>Transaction ID:</strong> {invoice.payment.transactionId}</p>
                  <p className="mb-0"><strong>Status:</strong> 
                    <span className="badge bg-success ms-2">{invoice.payment.status}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h6 className="mb-0">Delivery Information</h6>
                </div>
                <div className="card-body">
                  <p className="mb-2"><strong>Delivery Date:</strong> {invoice.delivery.date}</p>
                  <p className="mb-2"><strong>Time Slot:</strong> {invoice.delivery.slot}</p>
                  <p className="mb-0"><strong>Delivery Charge:</strong> 
                    {invoice.delivery.charge === 0 ? ' FREE' : ` ₹${invoice.delivery.charge}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Totals */}
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-end">
                <div className="col-md-6">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹{invoice.subtotal}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Discount:</span>
                    <span>-₹{invoice.discount}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Delivery Charge:</span>
                    <span>{invoice.delivery.charge === 0 ? 'FREE' : `₹${invoice.delivery.charge}`}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (5%):</span>
                    <span>₹{invoice.tax}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2 fs-5">
                    <strong>Total:</strong>
                    <strong className="text-success">₹{invoice.total}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-5">
            <p className="text-muted">
              <small>
                Thank you for shopping with ApniMandi. For any queries, contact us at info@apnimandi.in or call +91 7030 73 73 73
              </small>
            </p>
            <p className="text-muted">
              <small>
                This is a computer-generated invoice and does not require a physical signature.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;