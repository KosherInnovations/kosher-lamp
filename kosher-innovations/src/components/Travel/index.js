import React, { useEffect } from "react";
import changeLettersDark from "../../helpers/changeLettersDark";
import LazyLoad from "react-lazyload";
import travelWhite from "../../resources/travel-lamp/white-travel.webp";
import travelGrey from "../../resources/travel-lamp/grey-travel.webp";
import travelBlack from "../../resources/travel-lamp/black-travel.webp";
import travelBrown from "../../resources/travel-lamp/brown-travel.webp";

const Travel = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);

  const travelCards = [
    {
      id: "white",
      href: "https://www.kosherimage.com/cmd.php?pid=0f59cbfeb19f4a47a417c0ae1c1c3d32",
      imgSrc: travelWhite,
      titleTag: "Travel Lamp White Edition",
      altTag:
        "The Travel KosherLamp, white edition. Small enough for travel while still bright enough to light up an entire room.",
    },
    {
      id: "grey",
      href: "https://www.kosherimage.com/cmd.php?pid=156ef0e192fb4009886fa0e1389288ae",
      imgSrc: travelGrey,
      titleTag: "Travel Lamp Grey Edition",
      altTag:
        "The Travel KosherLamp, grey edition. Small enough for travel while still bright enough to light up an entire room.",
    },
    {
      id: "black",
      href: "https://www.kosherimage.com/cmd.php?pid=cd4dc5f4693e42f79a70913656236248",
      imgSrc: travelBlack,
      titleTag: "Travel Lamp Black Edition",
      altTag:
        "The Travel KosherLamp, black edition. Small enough for travel while still bright enough to light up an entire room.",
    },
    {
      id: "brown",
      href: "https://www.kosherimage.com/cmd.php?pid=a4642f2f517f4c9ab9f6e356a749412c",
      imgSrc: travelBrown,
      titleTag: "Travel Lamp Brown Edition",
      altTag:
        "The Travel KosherLamp, brown edition. Small enough for travel while still bright enough to light up an entire room.",
    },
  ];

  //   travelCards.forEach((card) => {
  //     <div className="travel-card" title={card.titleTag}>
  //       <LazyLoad height={200} offset={100}>
  //         <img src={card.imgSrc} alt={card.altTag}></img>
  //       </LazyLoad>
  //       <a href={card.href}>Add To Cart</a>
  //     </div>;
  //   });

  const travelCardElements = travelCards.map((card) => (
    <div className="travel-card" title={card.titleTag} key={card.id}>
      <LazyLoad height={200} offset={100}>
        <img src={card.imgSrc} alt={card.altTag} />
      </LazyLoad>
      <a href={card.href}>Add To Cart</a>
    </div>
  ));

  return <section id="travel">{travelCardElements}</section>;
};

export default Travel;