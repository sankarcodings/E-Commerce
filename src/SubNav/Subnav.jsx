import React from "react";
import './subnav.css'
import { FaCartShopping } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
function Subnav() {
  return (
    <div>
      <nav className="cart-nav">
        <div className="cart-home">
          <FaCartShopping className="icons" />
          <div className="cart-name">
            <p>Cart</p>
          </div>
        </div>
        <div className="cart-order">
          <Link to="/order">
            <BsCartCheck className="cart-orderlogo" />
          </Link>
          <Link to="/order" className="cart-orlink">
            Order
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Subnav;
