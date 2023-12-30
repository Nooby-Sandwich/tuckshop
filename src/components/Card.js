import React, { useState } from 'react';

export default function Card() {
  // Define state and functions
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 0;
    setQuantity(newQuantity);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem', margin: '30px', transition: 'transform 0.2s ease-in-out' }}>
      {/* Image removed */}
      <div className="card-body">
        <h5 className="card-title">Delicious Dish Name</h5>
        <p className="card-text">
          Explore the delightful taste of our special dish. Made with fresh
          ingredients and love.
        </p>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            type="number"
            className="form-control text-center"
            value={quantity}
            onChange={handleQuantityChange}
            style={{ width: '50px' }} 
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-warning">Add to Cart</button>
          <span className="text-muted">$9.99</span>
        </div>
      </div>
    </div>
  );
}
