import React from 'react';
import { MdPriceCheck } from "react-icons/md";
import './price.css'
function Wmenprice() {
  return (
    <div>
      <div className="price">
        <div className="price-rate">
          <div className="dis-price">
            <MdPriceCheck />
            3,699
          </div>
          <div className="fix-price">
            <MdPriceCheck />
            <s>5,999</s>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wmenprice;
