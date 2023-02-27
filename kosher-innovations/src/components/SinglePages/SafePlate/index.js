import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";
import LazyLoad from "react-lazyload";
import safePlate from "../../../resources/warming-tray/warming-tray.webp";

const SafePlate = () => {
  // props
  // const { pages = [], setCurrentPage } = props;

  useEffect(() => {
    changeLettersDark();
  }, []);

  return (
    <section id="safeplate">
      {/* <button
        className="homepage-btn"
        onClick={() => {
          setCurrentPage(pages[0]);
        }}
      >
        ←
      </button> */}
      <div className="single-page-card only-card">
        <LazyLoad height={200} offset={100}>
          <img
            id="only-card-img"
            src={safePlate}
            alt="Shabbos Safe Warming Tray"
          />
        </LazyLoad>
        <h2 className="product-price">$52.95</h2>
        <a
          href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=3d47a903d7454e30b3a5b3d4323532af"
          title={`add Shabbos Safe Warming Tray to cart`}
        >
          Add To Cart
        </a>
      </div>
    </section>
  );
};

export default SafePlate;
