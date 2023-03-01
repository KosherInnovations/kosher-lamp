import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";
import LazyLoad from "react-lazyload";
import alephBet from "../../../resources/decals/aleph-bet.webp";
import asherYatzar from "../../../resources/decals/asher-yatzar.webp";
import mitzvahTrain from "../../../resources/decals/mitzvah-train.webp";

const Decal = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);

  const decalCards = [
    {
      id: "aleph-bet",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=b1e04916143744b383a9d6ffd3c44c7f",
      heading: "Aleph Bet",
      imgSrc: alephBet,
      titleTag: "Aleph Bet Wall Decal",
      altTag: "The Aleph Bet Wall Decal, a fun way to decorate your walls",
    },
    {
      id: "asher-yatzar",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4a7df1614bbb4266842a421036ec4762",
      heading: "Asher Yatzar",
      imgSrc: asherYatzar,
      titleTag: "Asher Yatzar Wall Decal",
      altTag: "The Asher Yatzar Wall Decal, a fun way to decorate your walls",
    },
    {
      id: "mitzvah-train",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=dee5f1ab0ba84d6c9f79a3389bf16b8a",
      heading: "Mitzvah Train",
      imgSrc: mitzvahTrain,
      titleTag: "Mitzvah Train Decal",
      altTag: "The Mitzvah Train Wall Decal, a fun way to decorate your walls",
    },
  ];

  const decalCardElements = decalCards.map((card) => (
    <div className="single-page-card" title={card.titleTag} key={card.id}>
      <LazyLoad height={200} offset={100}>
        <img
          className="custom-only-card-img"
          src={card.imgSrc}
          alt={card.altTag}
        />
      </LazyLoad>
      <h2 className="product-price">$12.50</h2>
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

  return <section id="decal">{decalCardElements}</section>;
};

export default Decal;
