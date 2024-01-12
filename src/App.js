import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import CartPage from './screens/CartPage'; 

function App() {
 return (
   <Router>
     <div>
       <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/createUser" element={<SignUp />} />
         <Route path="/cartpage" element={<CartPage />} /> 
       </Routes>
     </div>
   </Router>
 );
}

export default App;
