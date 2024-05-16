import React from 'react';
import { MdPriceCheck } from "react-icons/md";
import './price.css'
function Menprice() {
  return (
    <div>
      <div className="price">
        <div className="price-rate">
          <div className="dis-price">
            <MdPriceCheck />
            999
          </div>
          <div className="fix-price">
            <MdPriceCheck />
            <s>4,999</s>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menprice;

