import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";
import LazyLoad from "react-lazyload";
import kLampWhite from "../../../resources/kmax/white-kmax.webp";
import kLampSteel from "../../../resources/kmax/silver-kmax.webp";
import kLampBlack from "../../../resources/kmax/black-kmax.webp";
import kLampBlue from "../../../resources/kmax/blue-kmax.webp";
import kLampGreen from "../../../resources/kmax/green-kmax.webp";
import kLampMarble from "../../../resources/kmax/marble-kmax.webp";
import kLampCherry from "../../../resources/kmax/cherry-kmax.webp";
import kLampIvory from "../../../resources/kmax/ivory-kmax.webp";
import kLampPink from "../../../resources/kmax/pink-kmax.webp";

const Kmax = () => {
  
  // props
  // const { pages = [], setCurrentPage } = props;

  useEffect(() => {
    changeLettersDark();
  }, []);

  const kmaxCards = [
    {
      id: "white",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1e99aeaef8244888a83b5451719f37ba",
      imgSrc: kLampWhite,
      titleTag: "KosherLamp MAX White",
      altTag:
        "The KosherLamp MAX, white edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "steel",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=786c59a779a84c3fb49490d3a3e5851d",
      imgSrc: kLampSteel,
      titleTag: "KosherLamp MAX Steel",
      altTag:
        "The KosherLamp MAX, steel edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "black",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=bc64082aae4b4c1e8bf84860ad7e28e8",
      imgSrc: kLampBlack,
      titleTag: "KosherLamp MAX Black",
      altTag:
        "The KosherLamp MAX, black edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "blue",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c7b777faf88748a6aa1785fc3cadda6b",
      imgSrc: kLampBlue,
      titleTag: "KosherLamp MAX Blue",
      altTag:
        "The KosherLamp MAX, blue edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "green",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=39a0d1a0846f4823a8454d2e693e198e",
      imgSrc: kLampGreen,
      titleTag: "KosherLamp MAX Green",
      altTag:
        "The KosherLamp MAX, green edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "marble",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1d455431b3314416b3b3ab4a10f60890",
      imgSrc: kLampMarble,
      titleTag: "KosherLamp MAX Marble",
      altTag:
        "The KosherLamp MAX, marble edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "cherry",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=8f4691d63dda490c8a3761a093b8d40d",
      imgSrc: kLampCherry,
      titleTag: "KosherLamp MAX Cherry",
      altTag:
        "The KosherLamp MAX, cherry edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "ivory",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1fb9df66839e418aa7c54a79ae152c74",
      imgSrc: kLampIvory,
      titleTag: "KosherLamp MAX Ivory",
      altTag:
        "The KosherLamp MAX, ivory edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
    {
      id: "pink",
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c6b34023ea794b8ca65b5c63070d230b",
      imgSrc: kLampPink,
      titleTag: "KosherLamp MAX Pink",
      altTag:
        "The KosherLamp MAX, pink edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
    },
  ];

  const kmaxCardElements = kmaxCards.map((card) => (
    <div className="single-page-card" title={card.titleTag} key={card.id}>
      <LazyLoad height={200} offset={100}>
        <img src={card.imgSrc} alt={card.altTag} />
      </LazyLoad>
      <h2 className="product-price">$52.95</h2>
      <a href={card.href} title={`add ${card.titleTag} to cart`}>
        Add To Cart
      </a>
    </div>
  ));

  return (
    <section id="kmax">
      {" "}
      {/* <button
        className="homepage-btn"
        onClick={() => {
          setCurrentPage(pages[0]);
        }}
      >
        ←
      </button> */}
      {kmaxCardElements}
    </section>
  );
};

export default Kmax;
