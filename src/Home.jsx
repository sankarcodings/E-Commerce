import React from 'react';
import NavBar from './Navbar/NavBar';
import ProdNav from './Product_navbar/Prodnav'
import Trend_Collect from './Tren_Collec/Trend_Collect.jsx'
import About from './About&Cont/About'
const Home = ({cart , Setcart}) => {
  return (
    <div>
      <NavBar />
      <ProdNav />
      <Trend_Collect cart={cart} Setcart={Setcart}/>
      <About />
    </div>
  );
}

export default Home;
