import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight"; 
import LazyLoad from "react-lazyload";
import tissueImg from "../../../resources/tissue/tissue.webp";

const Tissue = () => {
  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);

  const tissueCards = [
    {
      id: "trial",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=e1d76dfe33f242e9a17e2dd45837ed11",
      heading: "1 x 8 Pack",
      titleTag: "Shabbos Tissue Trial Pack | 1 x 8",
      altTag:
        "The Shabbos Tissue, trial pack, the bathroom tissue made for use on Shabbos and Yom Tov, and is in accordance with Halacha",
      price: "10.95",
    },
    {
      id: "family",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&bid=32d35e429067ce75ec7328e9512c4420",
      heading: "6 x 8 Pack",
      titleTag: "Shabbos Tissue Family Pack | 6 x 8",
      altTag:
        "The Shabbos Tissue, family pack, the bathroom tissue made for use on Shabbos and Yom Tov, and is in accordance with Halacha",
      price: "64.50",
    },
    {
      id: "club",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&bid=331a14206e748862986b896f511cbd5f",
      heading: "12 x 8 Pack",
      titleTag: "Shabbos Tissue Club Pack | 12 x 8",
      altTag:
        "The Shabbos Tissue, club pack, the bathroom tissue made for use on Shabbos and Yom Tov, and is in accordance with Halacha",
        price: "125.40"
      },
  ];

  const tissueCardElements = tissueCards.map((card) => (
    <div className="single-page-card" title={card.titleTag} key={card.id}>
      <LazyLoad height={200} offset={100}>
        <img
          className="medium-only-card-img"
          src={tissueImg}
          alt={card.altTag}
        />
      </LazyLoad>
      <h2 className="product-price">${card.price}<br></br>
      {card.heading}</h2>
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

  return <section id="tissue" className="single-page-section">{tissueCardElements}</section>;
};

export default Tissue;
