import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <h1>
          <span>Bloom</span> Beauty
        </h1>

        <ul className="nav-links">
          <li>Shop all</li>
          <li>Best sellers</li>
          <li>Collection</li>
          <li>About us</li>
          <li>Blog</li>
        </ul>

        <div className="search-bar">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
            <p>Search</p>
          </div>
          <div className="account-icon">
            <FontAwesomeIcon icon={faUser} />
            <p>Account</p>
          </div>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
