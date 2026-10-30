// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Cart from './components/Cart/Cart';
import ContactUs from './components/ContactUs/ContactUs';
import AuthModal from './components/AuthModal/AuthModal';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import TrackOrder from './components/TrackOrder/TrackOrder';
import Invoice from './components/Invoice/Invoice';

// Home page component that contains all the main sections
function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      {/* <About /> */}
      <Services />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <AuthModal />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/help" element={<Help />} />
              <Route path="/category/:categoryName" element={<CategoryProducts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/track-order/:trackingId?" element={<TrackOrder />} />
              <Route path="/invoice/:orderId" element={<Invoice />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;