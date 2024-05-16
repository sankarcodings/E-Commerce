import React, { useState } from "react";
import "./signin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { SiFlipkart } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
function Signup() {
  const [email, Setemail] = useState(" ");
  const [pwd, Setpwd] = useState("");
  const [date, Setdate] = useState("");
  const navigate=useNavigate()
  const submit = async (e) =>
  {
    e.preventDefault()
    await axios.post('http://localhost:3001/signin',{email,pwd})
    .then(result => {console.log(result) 
      alert('Succesfully Signined!!!')
      navigate('/home')
    })
    .catch( err => console.log(err))
  }
  return (
    <div>
      <div className="sign-par">
        <div className="signup">
          <div className="sign-back">
            <div className="sign-por1">
              <div className="sign-logo">
                <SiFlipkart />
              </div>
              <div className="sign-name">SmileyKart</div>
            </div>

            <div className="sign-por3">
              <h4>This is Our Signin Page</h4>
            </div>

            <div className="sign-por2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                nam doloremque repellat omnis iusto neque. Quae in, quia libero
                ut delectus sint quos commodi rem distinctio ipsa explicabo,
                nemo ratione!
              </p>
            </div>
          </div>
          <form action="POST" onSubmit={submit}>
            <div className="sign-page">
              <div className="sign-rec">
                <div className="sign-inp">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => Setemail(e.target.value)}
                    required
                  />
                </div>
                <div className="sign-inp">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => Setpwd(e.target.value)}
                    required
                  />
                </div>
                <div className="sign-inp">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    onChange={(e) => Setdate(e.target.value)}
                    // required
                  />
                </div>
                <div className="sign-inp" id="sign-log-butt">
                  <button id="signin">
                    Signin
                  </button>
                </div>
                <h4>Or</h4>
                <div className="sign-login">
                  <Link to="/">Login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="about">
        <div className="sign-about">
          <h2>About Us</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
          corporis pariatur ipsa dolore sunt commodi assumenda suscipit
          doloremque eius aliquid alias dolorem unde tempore nemo harum.
          Doloribus minima aspernatur illum sed corporis qui consequuntur, ipsam
          debitis dignissimos autem delectus velit, ut nemo iusto impedit
          nesciunt provident saepe doloremque mollitia eligendi. Nobis minus
          officiis perspiciatis? Impedit sit vel, delectus quibusdam adipisci
          sunt laudantium? Aspernatur dolorum asperiores possimus sed, eum ea
          dolorem?
        </p>
        <h2>Contact Us</h2>
        <div className="sign-mobile">
          <p>91+ 675 987 2345</p>
        </div>
        <div className="sign-social">
          <Link to="">
            <div className="so-logo">
              <FaInstagram />
            </div>
          </Link>
          <Link to="">
            <div className="so-logo">
              <FaFacebookSquare />
            </div>
          </Link>
          <Link to="">
            <div className="so-logo">
              <FaWhatsapp />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
