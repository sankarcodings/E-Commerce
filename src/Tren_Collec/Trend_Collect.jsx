import Babycoll from "../Trend_coll_data/Babycoll";
import Mencoll from "../Trend_coll_data/Mencoll";
import Womencoll from "../Trend_coll_data/Womencoll.jsx";
import babdata from "../Tren_data/E-Commerce.Trend-Coll-Bab.json";
import mendata from "../Tren_data/E-Commerce.Trend-Coll-Men.json";
import wmendata from "../Tren_data/E-Commerce.Trend-coll-Women.json";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../Trend_coll_data/Trend.css";
import { useState } from "react";
function Trend_Collect({ cart, Setcart }) {
  const [babproducts] = useState(babdata);
  const [menproducts] = useState(mendata);
  const [wmenproducts] = useState(wmendata);
  return (
    <>
      <div className="babies">
        <div className="bab-head">
          <h2>Trending Babies Collections </h2>
          <div className="show-link">
            <div className="show">
              <Link to="show-more" id="link">
                Show More
              </Link>
            </div>
            <div className="arr">
              <FaArrowRight id="arr" />
            </div>
          </div>
        </div>
        <div className="babies-coll">
          {babproducts.map((babproduct) =>
            babproduct.id <= 5 ? (
              <Babycoll
                babproduct={babproduct}
                cart={cart}
                Setcart={Setcart}
                key={babproduct.id}
              />
            ) : (
              []
            )
          )}
        </div>
      </div>
      <div className="Men">
        <div className="mens-head">
          <h2>Trending Mens Collections </h2>
          <div className="show-link">
            <div className="show">
              <a href="">Show More</a>
            </div>
            <div className="arr">
              <FaArrowRight id="arr" />
            </div>
          </div>
        </div>
      </div>
      <div className="mens-coll">
        {menproducts.map((menproduct) =>
          (menproduct.id <= 15)?
            <Mencoll
              menproduct={menproduct}
              cart={cart}
              Setcart={Setcart}
              key={menproduct.id}
            />
           : 
            []
        )}
      </div>
      <div className="women">
        <div className="wmen-head">
          <h2>Trending Womens Collections </h2>
          <div className="show-link">
            <div className="show">
              <a href="">Show More</a>
            </div>
            <div className="arr">
              <FaArrowRight id="arr" />
            </div>
          </div>
        </div>
        <div className="wmen-coll">
          {wmenproducts.map((wmenproduct) =>
            (            (wmenproduct.id <= 25) ? 
            <Womencoll
              wmenproduct={wmenproduct}
              cart={cart}
              Setcart={Setcart}
              key={wmenproduct.id}
            />
           : [])
          )}
        </div>
      </div>
    </>
  );
}

export default Trend_Collect;
