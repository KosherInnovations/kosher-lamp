import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
import ShabToothReviews from "../../../reviews/ShabToothReviews";
import LazyLoad from "react-lazyload";
import shabTooth from "../../../resources/toothbrush/shabbos-toothbrush.webp";

const ShabTooth = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);
  return (
    <>
      <section id="shabbos-toothbrush" className="single-page-section">
        <div className="single-page-card only-card" title="">
          <LazyLoad height={200} offset={100}>
            <img
              className="medium-only-card-img"
              src={shabTooth}
              alt="The Shabbos Toothbrush, a 4 pack of Shabbos Toothbrushes which allows you to brush your teeth on Shabbos and Yom Tov in accordance with Halacha"
              title="Shabbos Toothbrush"
            />
          </LazyLoad>
          <h2 className="product-price">
            $18.95<br></br>1 x 4 Pack
          </h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.kosherimage.com/cmd.php?pid=d73562f0b42637d3268b40b7e85e7f33"
            title="add Shabbos Toothbrush to cart"
          >
            Add To Cart
          </a>
        </div>
      </section>
      <div className="separation-line"></div>
      <section className="review-section">
        <h3 className="review-section-header">Reviews</h3>
        <ShabToothReviews />
      </section>
    </>
  );
};

export default ShabTooth;
