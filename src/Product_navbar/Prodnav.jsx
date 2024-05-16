import React from 'react';
import './ProdNav.css'
import { RiArrowDropDownLine } from "react-icons/ri";
function Prodnav() {
  return (
    <div>
      <nav className='prod-nav'>
            <div className='img'>
                <a href="">
                <img className="imge" src="./image/img1.jpg" alt="" />
                <h3>Grocery</h3>
                </a>
            </div>
            <div className='img'>
                <a href="">
                <img className="imge" src="./image/img2.png" alt="" />
                <h3>Mobiles</h3>
                </a>
            </div>
            <div className='img'>
                <a href="">
                <img className="imge" src="./image/img30.avif" alt="" />
                <h3>Fashion<RiArrowDropDownLine className='arrow'/></h3>
                </a>
            </div>
            <div className='img'>
                <a href="">
                <img className="imge" src="./image/img32.jpg" alt="" />
                <h3>Home & Furniture<RiArrowDropDownLine className='arrow'/></h3>
                </a>
            </div>            
            <div className='img'>
                <a href="">
                <img className="imge" src="./image/img40.jfif" alt="" />
                <h3>MakeUp Kits</h3>
                </a>
            </div>
            <div className='img'>
                <a href="">
                <img className="imge" src="./image/img7.webp" alt="" />
                <h3>Toys & Gift<RiArrowDropDownLine className='arrow'/></h3>
                </a>
            </div>
            <div className='img'>
                <a href="">
                <img className="imge" src="./image/img8.jpg" alt="" />
                <h3>Electronics<RiArrowDropDownLine className='arrow'/></h3>
                </a>
            </div>
            {/* <div className='img'>
                <a href="">
                <img classNmae="imge" src="./image/img4.jpg" alt="" />
                <h3>Bikes</h3>
                </a>
            </div> */}
      </nav>

    </div>
  );
}

export default Prodnav;
