import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousels';
import SearchBar from '../components/SearchBar';
import Cart from '../components/Cart'; 


export default function Homepage() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/foodItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Food Items:', data[0]);
      console.log('Food Categories:', data[1]);
      setFoodItems(data[0]);
      setFoodCategories(data[1]);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddToCart = (item, quantity) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity }]);
  };


  
  return (
    <>
      <Navbar />
      <Carousel />
      <div style={{ marginTop: '20px' }} className="ms-3">
        <SearchBar onSearch={setSearchItem} />
      </div>
      <div className="container mt-4">
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <div key={category._id}>
              <h3>{category.CategoryName}</h3>
              <div className="row">
                {foodItems
                  .filter((item) => item.CategoryName === category.CategoryName)
                  .map((filteredItem) => (
                    <div key={filteredItem._id} className="col-md-4 mb-3">
                      <Card item={filteredItem} onAddToCart={handleAddToCart} />
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
      <Cart cartItems={cartItems} />
      <Footer />
    </>
  );
}
