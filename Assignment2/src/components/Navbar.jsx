import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar({ count }) {
  return (
    <div className="navbar">
      <div className="main-headingOnNav">Food Ordering Portal </div>
      <div className="cart-icon">
        <Link to="cart">
          <i className="fa-solid fa-cart-shopping">{count}</i>
        </Link>
      </div>
    </div>
  );
}
