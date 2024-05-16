import React from "react";
import { Link } from "react-router-dom";
import Menprice from "../Price/Menprice.jsx";
import Rating2 from "../Rating_Prod/Rating2.jsx";
import "./Trend.css";
function men({menproduct,cart,Setcart}) {
  const menaddcart = () => {
    Setcart([...cart, menproduct]);
  };
  return (
    <>
        <div className="mens-coll">
              <Link className="trend-products">
              <div className="men-img">
                <img
                  src={menproduct.img}
                  alt=""
                />
                <h3 className="Prod-name">{menproduct.name}</h3>
                <Rating2 />
                <Menprice />
                <p className="saving">{menproduct.save}</p>
                <p>{menproduct.abt}</p>
                <button className="trend-button">Buy Now</button>
                <button className="trend-button" onClick={menaddcart}>Add to Cart</button>
              </div>
            </Link>
        </div>
    </>
  );
}

export default men;
