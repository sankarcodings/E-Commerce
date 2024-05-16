import React from "react";
import { Link } from "react-router-dom";
import Wmenprice from "../Price/Wmenprice.jsx";
import Rating3 from "../Rating_Prod/Rating3.jsx";
import "./Trend.css";
function women({wmenproduct,cart,Setcart}) {
  const addcart = () => {
    Setcart([...cart, wmenproduct]);
  };
  return (
    <>
        <div className="wmen-coll">
            <Link className="trend-products">
            <div className="wmen-img">
              <img
                src={wmenproduct.img}
                alt=""
              />
              <h3 className="Prod-name">{wmenproduct.name}</h3>
              <Rating3 />
              <Wmenprice />
              <p className="saving">{wmenproduct.save}</p>
              <p>{wmenproduct.abt}</p>
              <button className="trend-button">Buy Now</button>
              <button className="trend-button" onClick={addcart}>Add to Cart</button>
            </div>
          </Link>
        </div>
    </>
  );
}

export default women;
