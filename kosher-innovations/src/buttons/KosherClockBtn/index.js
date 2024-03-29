import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";
import scrollToTop from "../../helpers/scrollToTop";

const KosherClockBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        scrollToTop();
        setTimeout(() => {
          setCurrentPage(pages[12]);
        }, 1000);
      }}
    >
      <LazyLoad height={200} offset={400}>
        <img
          className="info-btn"
          src={infoBtn}
          alt="Go to KosherClock page"
        ></img>
      </LazyLoad>
    </button>
  );
};

export default KosherClockBtn;
