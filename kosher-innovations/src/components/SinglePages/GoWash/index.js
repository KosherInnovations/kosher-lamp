import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";

import LazyLoad from "react-lazyload";
import goWash from "../../../resources/go-wash/go-wash (1).webp";

const GoWash = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);
  return (
    <section id="go-wash" className="single-page-section">
      <div className="single-page-card only-card" title="">
        <LazyLoad height={200} offset={100}>
          <img
            className="medium-only-card-img"
            src={goWash}
            alt="The Go Wash, a portable washing cup"
            title="Go Wash"
          />
        </LazyLoad>
        <h2 className="product-price">$7.95</h2>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=76d33ab9cfbe438fa25c8876e344c439"
          title="add Go Wash to cart"
        >
          Add To Cart
        </a>
      </div>
    </section>
  );
};

export default GoWash;
