import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";

import LazyLoad from "react-lazyload";
import fridgeez from "../../../resources/fridg-eez/fridg-eez_1.webp";

const Fridgeez = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);
  return (
    <section id="fridgeez" className="single-page-section">
      <div className="single-page-card only-card" title="">
        <LazyLoad height={200} offset={100}>
          <img
            className="large-only-card-img"
            src={fridgeez}
            alt="Fridg-eez, a handy tool that allows you to keep your fridge light off on shabbos and yom tov"
            title="Fridg-eez"
          />
        </LazyLoad>
        <h2 className="product-price">$6.95</h2>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=6cbbe188b0a54a2ebff575e09afc25ac"
          title="add Fridg-eez to cart"
        >
          Add To Cart
        </a>
      </div>
    </section>
  );
};

export default Fridgeez;
