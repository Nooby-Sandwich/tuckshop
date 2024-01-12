import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 404) {
        console.log('User not found. Redirecting to sign-up page.');
        navigate('/createUser');
        return;
      }

      const responseData = await response.json();

      if (response.ok) {
        console.log('Login successful!');
        // Redirect to the desired page after successful login
        navigate('/');
      } else {
        console.error('Login failed:', response.status, responseData);
        setError('Invalid credentials. Please try again.');
      }

      console.error('Response:', response);
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="text-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          {/* Redirect to sign up page if not a user */}
          <div className="mt-3 text-center">
            <p className="mb-0">Not a member?</p>
            <Link to="/createUser" className="text-decoration-none">
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};