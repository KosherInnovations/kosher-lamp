import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";
import scrollToTop from "../../helpers/scrollToTop";

const ShabToothBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        scrollToTop();
        setTimeout(() => {
          setCurrentPage(pages[18]);
        }, 1000);
      }}
    >
      <LazyLoad height={200} offset={400}>
        <img
          className="info-btn"
          src={infoBtn}
          alt="Go to Shabbos Toothbrush page"
        ></img>
      </LazyLoad>
    </button>
  );
};

export default ShabToothBtn;
