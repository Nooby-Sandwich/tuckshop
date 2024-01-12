import React, { useState } from 'react';
import Cart from '../components/Cart';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Implement logic to place an order
    console.log('Placing order...');
    // Example: Call an API to place the order
    // After successfully placing the order, clear the cart
    //setCartItems([]);
    navigate('/');
  };

  const handleCancelOrder = () => {
    // Implement logic to cancel an order
    console.log('Cancelling order...');
    // Example: Call an API to cancel the order
    // After successfully cancelling the order, clear the cart
    //setCartItems([]);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      
      <Cart cartItems={cartItems} onPlaceOrder={handlePlaceOrder} onCancelOrder={handleCancelOrder} />
    </div>
  );
};

export default CartPage;
