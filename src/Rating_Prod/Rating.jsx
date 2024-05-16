import React from 'react';
import { IoIosStar } from "react-icons/io";
import './rating.css'
function Rating() {
  return (
    <div>
      <div className="rating">
          <div className="rat">
          <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
          </div>
      </div>
    </div>
  );
}

export default Rating;
