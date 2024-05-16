import React from 'react';
import './About.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
function About() {
  return (
    <div>
      <div className="about">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in magnam laborum, nobis id saepe aut praesentium inventore omnis non sunt reprehenderit corrupti itaque fuga expedita vitae suscipit aliquam error impedit totam recusandae asperiores! Quibusdam nesciunt error pariatur ratione aut rerum. Porro laboriosam at officiis magni facilis odit unde sint dolorum, suscipit saepe non impedit fugit perspiciatis error placeat quisquam et repellendus doloribus. Ipsa esse aliquam veniam voluptatibus sed saepe optio placeat! Ut qui odit reprehenderit, nesciunt ratione blanditiis nam.</p>
        <h3>Contact Us</h3>
        <div className="phone">
            Phone No : +91 675 9876 345
        </div>
        <div className="social">
            <div className="icon">
            <a href=""><FaInstagram /></a>
            </div>
            <div className="icon">
            <a href=""><FaFacebookSquare /></a>
            </div>
            <div className="icon">
            <a href=""><FaWhatsapp /></a>
            </div>
        </div>
        </div>
    </div>
  );
}

export default About;
