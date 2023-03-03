import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
import LazyLoad from "react-lazyload";
import weekTooth from "../../../resources/toothbrush/uncle-moishy-toothbrush.webp";

const WeekTooth = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);
  return (
    <section id="weekday-toothbrush" className="single-page-section">
      <div className="single-page-card only-card" title="">
        <LazyLoad height={200} offset={100}>
          <img
            className="medium-only-card-img"
            src={weekTooth}
            alt="The (Weekday) Uncle Moishy Toothbrush, a 4 pack of weekday toothbrushes which are a great way to get the kids to practice oral hygeiene"
            title="Uncle Moishy Weekday Toothbrush"
          />
        </LazyLoad>
        <h2 className="product-price">
          $6.95<br></br>1 x 4 Pack
        </h2>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=db93a1eee8ae4979b5a3112c3ef94f28"
          title="add Uncle Moishy Weekday Toothbrush to cart"
        >
          Add To Cart
        </a>
      </div>
    </section>
  );
};

export default WeekTooth;
