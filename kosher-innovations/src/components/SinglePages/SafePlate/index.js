import React, { useEffect } from "react";
// import changeLettersDark from "../../../helpers/changeLettersDark";
import changeLetterLight from "../../../helpers/changeLettersLight";
    
import LazyLoad from "react-lazyload";
import safePlate from "../../../resources/warming-tray/warming-tray.webp";

const SafePlate = () => {

  useEffect(() => {
    // changeLettersDark();
    changeLetterLight();
  }, []);

  return (
    <section id="safeplate" className="single-page-section">
      <div className="single-page-card only-card">
        <LazyLoad height={200} offset={100}>
          <img
            className="large-only-card-img"
            src={safePlate}
            alt="Shabbos Safe Warming Tray"
          />
        </LazyLoad>
        <h2 className="product-price">$149.99</h2>
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
