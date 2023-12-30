import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Link>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-4">
          <Link className="text-body-secondary" to="/twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li>
        <li className="ms-4">
          <Link className="text-body-secondary" to="/instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
        <li className="ms-4">
          <Link className="text-body-secondary" to="/facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
