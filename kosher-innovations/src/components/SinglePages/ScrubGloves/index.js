import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";
import LazyLoad from "react-lazyload";
import glovesRed from "../../../resources/scrub-gloves/gloves-red.webp";
import glovesBlue from "../../../resources/scrub-gloves/gloves-blue.webp";

const ScrubGloves = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);

  const gloveCards = [
    {
      id: "red",
      href: "https://www.kosherimage.com/cmd.php?pid=a0a5dfe511e4436f85d2fca1921a117c",
      imgSrc: glovesRed,
      altTag:
        "The Shabbos Scrub Gloves, red edition, an awesome way to wash dishes on Shabbos and Yom Tov in accordance with Halacha",
      titleTag: "Red Shabbos Scrub Gloves",
    },
    {
      id: "blue",
      href: "https://www.kosherimage.com/cmd.php?pid=2dff3e69a98643e083565edbbb3713d6",
      imgSrc: glovesBlue,
      altTag:
        "The Shabbos Scrub Gloves, blue edition, an awesome way to wash dishes on Shabbos and Yom Tov in accordance with Halacha",
      titleTag: "Blue Shabbos Scrub Gloves",
    },
  ];

  const gloveCardElements = gloveCards.map((card) => (
    <div className="single-page-card" title={card.titleTag} key={card.id}>
      <LazyLoad height={200} offset={100}>
        <img
          className="medium-only-card-img"
          src={card.imgSrc}
          alt={card.altTag}
        />
      </LazyLoad>
      <h2 className="product-price">$7.99</h2>
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

  return <section id="scrub-gloves">{gloveCardElements}</section>;
};

export default ScrubGloves;
