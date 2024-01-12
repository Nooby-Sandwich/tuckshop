// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';

const SocialMediaLink = ({ to, icon }) => (
 <li className="ms-4">
   <Link to={to} className="text-body-secondary">
     <FontAwesomeIcon icon={icon} />
   </Link>
 </li>
);

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
       <SocialMediaLink to="/twitter" icon={faTwitter} />
       <SocialMediaLink to="/instagram" icon={faInstagram} />
       <SocialMediaLink to="/facebook" icon={faFacebook} />
     </ul>

     <div className="col-md-4 d-flex align-items-center">
       <span className="mb-3 mb-md-0 text-body-secondary">Email: tuckshop@foodfood.com</span>
       <span className="mb-3 mb-md-0 text-body-secondary">Phone: +1234567890</span>
     </div>

     <div className="col-md-4 d-flex align-items-center">
       <Link to="/terms" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">Terms of Service</Link>
       <Link to="/privacy" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">Privacy Policy</Link>
     </div>
   </footer>
 );
};

export default Footer;