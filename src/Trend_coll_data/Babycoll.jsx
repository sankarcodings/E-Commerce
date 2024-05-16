import React from "react";
import Rating from "../Rating_Prod/Rating.jsx";
import { Link } from "react-router-dom";
import "./Trend.css";
import Babprice from "../Price/Babprice.jsx";
function baby({ babproduct,cart, Setcart }) {
  const addcart = () => {
    Setcart([...cart, babproduct]);
  };

  return (
    <>
        <div className="babies-coll">
              <Link className="trend-products">
              <div className="bab-img">
                <img src={babproduct.img} alt="" />
                <h3 className="Prod-name">{babproduct.name}</h3>
                <Rating />
                <Babprice />
                <p className="saving">{babproduct.save}</p>
                <p>{babproduct.abt}</p>
                <button className="trend-button">Buy Now</button>
                <button className="trend-button" onClick={addcart}>
                  Add to Cart
                </button>
              </div>
            </Link>
        </div>
    </>
  );
}

export default baby;
