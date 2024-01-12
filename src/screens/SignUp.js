import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate username length
    if (name === 'username' && value.length < 3) {
      setError('Username must be at least 3 characters long');
    } else {
      setError('');
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 409) {
        console.log('User already exists. Redirecting to login page.');
        window.location.href = '/login';
        return;
      }

      const responseData = await response.json();

      if (response.ok) {
        console.log('Sign up successful!');
        // Redirect to the login page after successful signup
        window.location.href = '/login';
      } else {
        console.error('Sign up failed:', response.status, responseData);
        setError('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred during sign up:', error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Create your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {error && <div className="text-danger">{error}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
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
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        {/* Redirect to login page if already a user */}
        <div className="mt-3 text-center">
          <p className="mb-0">Already have an account?</p>
          <Link to="/login" className="text-decoration-none">
            Login in instead
          </Link>
        </div>
      </div>
    </div>
  );
};

