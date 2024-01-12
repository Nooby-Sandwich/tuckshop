import React, { useState } from 'react';

const Card = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price: ₹{item.price}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button className="btn btn-outline-secondary" onClick={handleDecrease}>
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-outline-secondary" onClick={handleIncrease}>
              +
            </button>
          </div>
          <button className="btn btn-success" onClick={() => onAddToCart(item, quantity)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
