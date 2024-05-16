import React, { useState } from 'react';
import Rating from "../Rating_Prod/Rating.jsx";
import { Link } from "react-router-dom";
import "../Trend_coll_data/Trend.css";
import Babprice from "../Price/Babprice.jsx";
import babshow from '../Tren_data/E-Commerce.Trend-Coll-Bab.json'
function ShowmoreBab() {
  const [babshowproduct] =useState(babshow)
  return (
    <div>
             <div className="babies-coll">
            {
              babshowproduct.map((product)=>
            (
              <Link className="trend-products">
              <div className="bab-img">
                <img src={product.img} alt="" />
                <h3 className="Prod-name">{product.name}</h3>
                <Rating />
                <Babprice />
                <p className="saving">{product.save}</p>
                <p>{product.abt}</p>
                <button className="trend-button">Buy Now</button>
                <button className="trend-button">
                  Add to Cart
                </button>
              </div>
            </Link>
            ))
            }
        </div>
    </div>
  );
}

export default ShowmoreBab;
