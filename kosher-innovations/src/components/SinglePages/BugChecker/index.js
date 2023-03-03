import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
    
import LazyLoad from "react-lazyload";
import bugChecker from "../../../resources/bug-checker/bug-checker.webp";

const BugChecker = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);

  return (
    <section id="bug-checker" className="single-page-section">
      <div className="single-page-card only-card" title="">
        <LazyLoad height={200} offset={100}>
          <img
            className="large-only-card-img"
            src={bugChecker}
            alt="The Bug Checker, a tool used to check fresh produce for bugs"
            title="Bug Checker"
          />
        </LazyLoad>
        <h2 className="product-price">$53.95</h2>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.kosherimage.com/cmd.php?pid=e418af322bd347a18412af62a324be4e"
          title="add Bug Checker MAX to cart"
        >
          Add To Cart
        </a>
      </div>
    </section>
  );
};

export default BugChecker;
