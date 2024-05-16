import React from 'react';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import './rating.css'
function Rating3() {
  return (
    <div>
        <div className="rat">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarOutline />
        </div>
    </div>
  );
}

export default Rating3;
