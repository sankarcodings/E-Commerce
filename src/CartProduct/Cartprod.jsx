import React, { useState } from "react";
import Rating from "../Rating_Prod/Rating.jsx";
import { Link } from "react-router-dom";
import "./cart.css";
import '../Price/price.css'
import Subnav from "../SubNav/Subnav.jsx";


import { MdPriceCheck } from "react-icons/md";
function Cartprod({ cart, Setcart }) {
  function removecart(id) {
    Setcart(cart.filter((c) => c.id !== id));
  }

  return (
    <>
      <div className="cart-page">
        <Subnav />
        <div className="add-cart">
          {cart.map((product) => (
            <Link className="trend-products" key={cart.id}>
              <div className="cart-img">
                <div className="img-name">
                  <img className="cart-images" src={product.img} alt="" />
                  <h5 className="Prod-name">{product.name}</h5>
                </div>
                <div className="price">
                  <div className="price-rate">
                    <div className="dis-price">
                      <MdPriceCheck />
                      {product.price}
                    </div>
                    <div className="fix-price">
                      <MdPriceCheck />
                      <s>{product.fixprice}</s>
                    </div>
                  </div>
                  <p>Save 64% in Best Offer</p>
                </div>
                <p>{product.abt}</p>
                <div className="cart-quan">
                  <h5>Quantity</h5>
                  <div className="quan-button">
                    <button>-</button>
                    <h4>{1}</h4>
                    <button>+</button>
                  </div>
                </div>
                <button className="trend-button">Buy Now</button>
                <button
                  className="trend-button"
                  id="remove-butt"
                  onClick={() => removecart(product.id)}
                >
                  Remove to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cartprod;
