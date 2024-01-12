import React, { useState, useEffect } from 'react';

const Cart = ({ cartItems, onPlaceOrder, onCancelOrder }) => {
  const [timer, setTimer] = useState(500);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((cartItem) => (
        <div key={cartItem.item._id}>
          <p>{cartItem.item.name}</p>
          <p>Quantity: {cartItem.quantity}</p>
        </div>
      ))}
      <button className="btn btn-success" onClick={onPlaceOrder}>
        Place Order
      </button>
      <button className="btn btn-danger" onClick={onCancelOrder} disabled={timer > 0}>
        Cancel Order ({timer}s)
      </button>
    </div>
  );
};

export default Cart;
