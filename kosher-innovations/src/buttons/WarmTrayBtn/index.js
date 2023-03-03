import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";
import scrollToTop from "../../helpers/scrollToTop";

const WarmTrayBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        scrollToTop();
        setTimeout(() => {
          setCurrentPage(pages[8]);
        }, 1000);
      }}
    >
      <LazyLoad height={200} offset={100}>
        <img
          className="info-btn"
          src={infoBtn}
          alt="Go to Shabbos Safe Warming Tray page"
        ></img>
      </LazyLoad>
    </button>
  );
};

export default WarmTrayBtn;
