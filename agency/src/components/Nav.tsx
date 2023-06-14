import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="social-bar">
        <ul>
          <li>
            <Link to="https://facebook.com">
              <img src="/images/facebook.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com">
              <img src="/images/twitter.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="https://instagram.com">
              <img src="/images/instagram.png" alt="" />
            </Link>
          </li>
        </ul>
        <Link to="mailto:you@email.com" className="email-icon">
          <img src="/images/email.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
