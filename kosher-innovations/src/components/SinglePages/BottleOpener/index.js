import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
import OpenerReviews from "../../../reviews/OpenerReviews";
import LazyLoad from "react-lazyload";
import bottleOpener from "../../../resources/bottle-opener/bottle-opener_1.webp";

const BottleOpener = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);
  return (
    <>
      <section id="bottle-opener" className="single-page-section">
        <div className="single-page-card only-card" title="">
          <LazyLoad height={200} offset={100}>
            <img
              className="medium-only-card-img"
              src={bottleOpener}
              alt="The Shabbos Bottle Opener, a tool that allows yout to open bottles open shabbos in accordance with Halacha"
              title="Shabbos Bottle Opener"
            />
          </LazyLoad>
          <h2 className="product-price">$14.95</h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.kosherimage.com/cmd.php?pid=a9f059a9b16d4f12a9f10f188911df3b"
            title="add Shabbos Bottle Opener to cart"
          >
            Add To Cart
          </a>
        </div>
      </section>
      <div className="separation-line"></div>
      <section className="review-section">
        <h3 className="review-section-header">Reviews</h3>
        <OpenerReviews />
      </section>
    </>
  );
};

export default BottleOpener;
