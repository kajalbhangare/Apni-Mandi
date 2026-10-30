// src/hooks/useCartAuth.js
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export const useCartAuth = () => {
  const cart = useCart();
  const auth = useAuth();

  const addToCartWithAuth = (product) => {
    return auth.requireAuth(() => {
      cart.addToCart(product);
    });
  };

  return {
    ...cart,
    addToCart: addToCartWithAuth,
    user: auth.user,
    login: auth.login,
    logout: auth.logout,
    showLoginModal: auth.showLoginModal,
    setShowLoginModal: auth.setShowLoginModal
  };
};