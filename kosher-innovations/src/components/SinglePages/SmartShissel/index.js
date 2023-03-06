import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
import ShisselReviews from "../../../reviews/ShisselReviews";
import LazyLoad from "react-lazyload";
import shisselBlue from "../../../resources/smart-shissel/blue-shissel.webp";
import shisselGrey from "../../../resources/smart-shissel/grey-shissel.webp";
import shisselBeige from "../../../resources/smart-shissel/beige-shissel.webp";
import shisselPink from "../../../resources/smart-shissel/pink-shissel.webp";

const SmartShissel = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);
  const shisselCards = [
    {
      id: "blue",
      href: "https://www.kosherimage.com/cmd.php?pid=1e2781d9e9db40d995552a7c7939c2ea",
      imgSrc: shisselBlue,
      titleTag: "Blue Smart Shissel",
      altTag:
        "The Smart Shissel, blue edition. The smart way to wash Negel Vasser in the morning",
    },
    {
      id: "grey",
      href: "https://www.kosherimage.com/cmd.php?pid=d25a71ec1a704649ba40277dc6cb11a2",
      imgSrc: shisselGrey,
      titleTag: "Grey Smart Shissel",
      altTag:
        "The Smart Shissel, grey edition. The smart way to wash Negel Vasser in the morning",
    },
    {
      id: "beige",
      href: "https://www.kosherimage.com/cmd.php?pid=88e6be0e4e2b4b248b2745ce1fbf2e4e",
      imgSrc: shisselBeige,
      titleTag: "Beige Smart Shissel",
      altTag:
        "The Smart Shissel, beige edition. The smart way to wash Negel Vasser in the morning",
    },
    {
      id: "pink",
      href: "https://www.kosherimage.com/cmd.php?pid=4f01e79e0dd448b382ea6f4ee330de82",
      imgSrc: shisselPink,
      titleTag: "Pink Smart Shissel",
      altTag:
        "The Smart Shissel, pink edition. The smart way to wash Negel Vasser in the morning",
    },
  ];

  const shisselCardElements = shisselCards.map((card) => (
    <div className="single-page-card" title={card.titleTag} key={card.id}>
      <LazyLoad height={200} offset={100}>
        <img
          className="medium-only-card-img"
          src={card.imgSrc}
          alt={card.altTag}
        />
      </LazyLoad>
      <h2 className="product-price">$19.95</h2>
      <a
        rel="noreferrer"
        target="_blank"
        href={card.href}
        title={`add ${card.titleTag} to cart`}
      >
        Add To Cart
      </a>
    </div>
  ));

  return (
    <>
      <section id="smart-shissel" className="single-page-section">
        {shisselCardElements}
      </section>
      <div className="separation-line"></div>
      <section className="review-section">
        <h3 className="review-section-header">Reviews</h3>
        <ShisselReviews />
      </section>
    </>
  );
};

export default SmartShissel;
