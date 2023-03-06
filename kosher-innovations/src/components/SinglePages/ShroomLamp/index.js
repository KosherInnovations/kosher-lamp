import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
import ShroomReviews from "../../../reviews/ShroomReviews";
import LazyLoad from "react-lazyload";
import shroomLamp from "../../../resources/shroom-lamp/red-shroom.webp";

const ShroomLamp = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);
  return (
    <>
      <section id="mushroom-kosherlamp" className="single-page-section">
        <div className="single-page-card only-card" title="">
          <LazyLoad height={200} offset={100}>
            <img
              className="medium-only-card-img"
              src={shroomLamp}
              alt="The Mushroom KosherLamp, a kid friendly version of the popular KosherLamp"
              title="Mushroom KosherLamp"
            />
          </LazyLoad>
          <h2 className="product-price">$44.95</h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=515cfa6e0de346488d2891efe33e0200"
            title="add Mushroom KosherLamp to cart"
          >
            Add To Cart
          </a>
        </div>
      </section>
      <div className="separation-line"></div>
      <section className="review-section">
        <h3 className="review-section-header">Reviews</h3>
        <ShroomReviews />
      </section>
    </>
  );
};

export default ShroomLamp;
