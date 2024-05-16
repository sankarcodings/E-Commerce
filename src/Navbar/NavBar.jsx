import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'
import { SiFlipkart } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";
function NavBar() {
  return (
    <div>
      <nav className='nav'>
        <div className="logo-name">
        <div className="logo">
                <SiFlipkart className='flip-icon'/>
            </div>
            <div className="name">
              <h1>SmileyKart</h1>
            </div>
        </div>
        <div className='search'>
         <div className="seacont">
         <button className='sea-button'><CiSearch className='sea' /></button>
          <input type="text" placeholder='Search Products here' id='inp' />
         </div>
        </div>
        <div className="log">
            <RiAccountPinCircleFill className='icons'/>
            <Link className='link' to='/'>Login</Link>
            <a href="" className='link1'><RiArrowDropDownLine /></a>
        </div>
        <div className="home-signup">
            <RiAccountPinCircleFill className='icons'/>
            <Link className='link' to='/signin'>Signin</Link>
            <a href="" className='link1'><RiArrowDropDownLine /></a>
        </div>
        <div className="cart">
            <FaCartShopping className='icons' />
            <Link to='/cart' className='link'>Cart</Link>
            <a href="" className='link1' ><RiArrowDropDownLine /></a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
