import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
import LazyLoad from "react-lazyload";
import kosherClock from "../../../resources/kosher-clock/kosherclock.webp";

const KosherClock = () => {
  // props
  // const { pages = [], setCurrentPage } = props;

  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);

  return (
    <section id="kosherclock">
      {/* <button
        className="homepage-btn"
        onClick={() => {
          setCurrentPage(pages[0]);
        }}
      >
        ←
      </button> */}
      <div className="single-page-card only-card">
        <LazyLoad height={200} offset={100}>
          <img
            className="large-only-card-img"
            src={kosherClock}
            alt="KosherClock"
          />
        </LazyLoad>
        <h2 className="product-price">$23.95</h2>
        <a
          href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4bb9fb8c67954716bc68708634c6c8ae"
          title={`add KosherClock to cart`}
        >
          Add To Cart
        </a>
      </div>
    </section>
  );
};

export default KosherClock;
