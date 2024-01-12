import React, { useState, useEffect } from 'react';

const Order = () => {
 const [orders, setOrders] = useState([]);

 useEffect(() => {
   fetchOrders();
 }, []);

 const fetchOrders = async () => {
   try {
     const response = await fetch('http://localhost:5000/api/order');
     const data = await response.json();
     setOrders(data);
   } catch (error) {
     console.error('Failed to fetch orders', error);
   }
 };

 return (
   <div className="container mt-4">
     <h2>Order History</h2>
     <ul className="list-group mt-3">
       {orders.map((order) => (
         <li
           key={order._id}
           className="list-group-item d-flex justify-content-between align-items-center"
         >
           Order #{order._id} | Amount: ${order.amount} | Time: {order.timestamp}
         </li>
       ))}
     </ul>
   </div>
 );
};

export default Order;