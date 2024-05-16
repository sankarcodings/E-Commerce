import React, { useState } from "react";
import { MdPriceCheck } from "react-icons/md";
import babydata from '../Tren_data/babdata.json'
import './price.css'
function babprice() {
  const[babyprice] = useState(babydata)
  return (
    <div>
      <div className="price">
        <div className="price-rate">
          <div className="dis-price">
            <MdPriceCheck />
            1,699
          </div>
          <div className="fix-price">
            <MdPriceCheck />
            <s>3,999</s>
          </div>
        </div>
        {/* <p>Save 64% in Best Offer</p> */}
      </div>
    </div>
  );
}

export default babprice;
