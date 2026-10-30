// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Cart.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useCart } from '../../context/CartContext'; 

// const Cart = () => {
//   const { cartItems, updateQuantity, removeFromCart } = useCart(); // 🆕

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const calculateDiscount = () => {
//     return cartItems.reduce((total, item) => 
//       total + ((item.originalPrice - item.price) * item.quantity), 0
//     );
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => 
//       total + (item.originalPrice * item.quantity), 0
//     );
//   };

//   const deliveryCharge = calculateTotal() > 500 ? 0 : 40;

//   if (cartItems.length === 0) {
//     return (
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-12 text-center">
//             <div className="empty-cart">
//               <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
//               <h3>Your cart is empty</h3>
//               <p>Add some fresh products to your cart</p>
//               <Link to="/" className="btn btn-success">
//                 Continue Shopping
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="mb-4">Shopping Cart</h2>
//         </div>
//       </div>

//       <div className="row">
//         {/* Cart Items */}
//         <div className="col-lg-8">
//           <div className="card">
//             <div className="card-body">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="cart-item row align-items-center mb-4 pb-4 border-bottom">
//                   <div className="col-md-2">
//                     <img 
//                       src={item.image} 
//                       alt={item.name}
//                       className="img-fluid rounded"
//                     />
//                   </div>
                  
//                   <div className="col-md-4">
//                     <h5 className="mb-1">{item.name}</h5>
//                     <p className="text-muted mb-0">₹{item.price} / {item.unit}</p>
//                     {item.originalPrice > item.price && (
//                       <p className="text-muted mb-0">
//                         <small>
//                           <s>₹{item.originalPrice}</s> 
//                           <span className="text-success ms-2">
//                             Save ₹{item.originalPrice - item.price}
//                           </span>
//                         </small>
//                       </p>
//                     )}
//                   </div>

//                   <div className="col-md-3">
//                     <div className="quantity-controls d-flex align-items-center">
//                       <button 
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       >
//                         <i className="fas fa-minus"></i>
//                       </button>
                      
//                       <span className="mx-3">{item.quantity}</span>
                      
//                       <button 
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         <i className="fas fa-plus"></i>
//                       </button>
//                     </div>
//                   </div>

//                   <div className="col-md-2 text-center">
//                     <h5 className="text-success">₹{item.price * item.quantity}</h5>
//                   </div>

//                   <div className="col-md-1 text-end">
//                     <button 
//                       className="btn btn-link text-danger"
//                       onClick={() => removeFromCart(item.id)} // 🆕 use context
//                     >
//                       <i className="fas fa-trash"></i>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="col-lg-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title mb-4">Order Summary</h5>
              
//               <div className="d-flex justify-content-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>₹{calculateSubtotal()}</span>
//               </div>
              
//               <div className="d-flex justify-content-between mb-2 text-success">
//                 <span>Discount:</span>
//                 <span>-₹{calculateDiscount()}</span>
//               </div>
              
//               <div className="d-flex justify-content-between mb-2">
//                 <span>Delivery:</span>
//                 <span>{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}</span>
//               </div>
              
//               <hr />
              
//               <div className="d-flex justify-content-between mb-4">
//                 <strong>Total:</strong>
//                 <strong className="text-success">₹{calculateTotal() + deliveryCharge}</strong>
//               </div>

//               {calculateTotal() < 500 && (
//                 <div className="alert alert-info">
//                   <small>
//                     Add ₹{500 - calculateTotal()} more for FREE delivery!
//                   </small>
//                 </div>
//               )}

//              <Link to="/checkout" className="btn btn-success w-100 py-2 mb-3">
//                Proceed to Checkout
//               </Link>

//               <Link to="/" className="btn btn-outline-success w-100">
//                 Continue Shopping
//               </Link>
//             </div>
//           </div>

//           {/* Promo Code */}
//           <div className="card mt-4">
//             <div className="card-body">
//               <h6 className="card-title">Apply Promo Code</h6>
//               <div className="input-group">
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   placeholder="Enter promo code"
//                 />
//                 <button className="btn btn-success">Apply</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../context/CartContext'; 

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, addToCart } = useCart();
  const [hasInitialized, setHasInitialized] = useState(false);

  // Add sample products to cart if empty (for demonstration)
  useEffect(() => {
    if (cartItems.length === 0 && !hasInitialized) {
      const sampleProducts = [
        {
          id: 1,
          name: "Organic Tomatoes",
          price: 80,
          originalPrice: 100,
          quantity: 2,
          image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          unit: "kg",
          category: "Fruit Vegetables",
          discount: "20% OFF"
        },
        {
          id: 2,
          name: "Fresh Apples",
          price: 120,
          originalPrice: 150,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          unit: "kg",
          category: "Fresh Fruits",
          discount: "20% OFF"
        },
        {
          id: 3,
          name: "Green Cucumbers",
          price: 40,
          originalPrice: 50,
          quantity: 3,
          image: "https://images.unsplash.com/photo-1591177141224-506100f782c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          unit: "kg",
          category: "Fruit Vegetables",
          discount: "20% OFF"
        }
      ];

      sampleProducts.forEach(product => {
        addToCart(product);
      });
      
      setHasInitialized(true);
    }
  }, [cartItems.length, hasInitialized, addToCart]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    return cartItems.reduce((total, item) => 
      total + ((item.originalPrice - item.price) * item.quantity), 0
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => 
      total + (item.originalPrice * item.quantity), 0
    );
  };

  const deliveryCharge = calculateTotal() > 500 ? 0 : 40;

  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <div className="empty-cart">
              <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
              <h3>Your cart is empty</h3>
              <p>Add some fresh products to your cart</p>
              <Link to="/" className="btn btn-success">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Shopping Cart</h2>
            <button 
              className="btn btn-outline-danger btn-sm"
              onClick={clearCart}
            >
              <i className="fas fa-trash me-1"></i> Clear Cart
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header bg-light">
              <h6 className="mb-0">
                <i className="fas fa-shopping-cart me-2"></i>
                {cartItems.length} Item{cartItems.length !== 1 ? 's' : ''} in Cart
              </h6>
            </div>
            <div className="card-body">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item row align-items-center mb-4 pb-4 border-bottom">
                  <div className="col-md-2">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{height: '80px', objectFit: 'cover', width: '100%'}}
                    />
                  </div>
                  
                  <div className="col-md-4">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="text-muted mb-1 small">{item.category}</p>
                    <p className="text-muted mb-0">₹{item.price} / {item.unit}</p>
                    {item.originalPrice > item.price && (
                      <p className="text-muted mb-0">
                        <small>
                          <s>₹{item.originalPrice}</s> 
                          <span className="text-success ms-2">
                            Save ₹{item.originalPrice - item.price}
                          </span>
                        </small>
                      </p>
                    )}
                  </div>

                  <div className="col-md-3">
                    <div className="quantity-controls d-flex align-items-center">
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      
                      <span className="mx-3 fw-bold">{item.quantity}</span>
                      
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="col-md-2 text-center">
                    <h5 className="text-success mb-0">₹{item.price * item.quantity}</h5>
                    <small className="text-muted">₹{item.price} each</small>
                  </div>

                  <div className="col-md-1 text-end">
                    <button 
                      className="btn btn-link text-danger"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header bg-light">
              <h6 className="mb-0">Order Summary</h6>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items):</span>
                <span>₹{calculateSubtotal()}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2 text-success">
                <span>Discount:</span>
                <span>-₹{calculateDiscount()}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery:</span>
                <span>{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong className="text-success">₹{calculateTotal() + deliveryCharge}</strong>
              </div>

              {calculateTotal() < 500 && (
                <div className="alert alert-info">
                  <small>
                    <i className="fas fa-info-circle me-1"></i>
                    Add ₹{500 - calculateTotal()} more for FREE delivery!
                  </small>
                </div>
              )}

              <Link to="/checkout" className="btn btn-success w-100 py-2 mb-3">
                <i className="fas fa-lock me-2"></i>
                Proceed to Checkout
              </Link>

              <Link to="/" className="btn btn-outline-success w-100">
                <i className="fas fa-shopping-basket me-2"></i>
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Promo Code */}
          <div className="card mt-4">
            <div className="card-header bg-light">
              <h6 className="mb-0">Apply Promo Code</h6>
            </div>
            <div className="card-body">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter promo code"
                />
                <button className="btn btn-success">Apply</button>
              </div>
              <small className="text-muted mt-2 d-block">
                Popular codes: <span className="text-success">FRESH10</span>, <span className="text-success">VEGGIE20</span>
              </small>
            </div>
          </div>

          {/* Security Badge */}
          <div className="card mt-4">
            <div className="card-body text-center">
              <i className="fas fa-lock text-success fa-2x mb-2"></i>
              <h6 className="mb-1">Secure Checkout</h6>
              <small className="text-muted">Your transaction is secured with SSL encryption</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;