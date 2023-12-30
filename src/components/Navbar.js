import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [userSignedIn, setUserSignedIn] = useState(false);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSignOut = () => {
    // Implement the sign-out logic
    setUserSignedIn(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MKC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Orders">
                  Orders
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {userSignedIn ? (
                <li className="nav-item">
                  <img
                    src="path_to_user_photo.jpg"
                    alt="User"
                    className="nav-link rounded-circle"
                    style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                  />
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    SignUp/Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
