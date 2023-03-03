import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";
import scrollToTop from "../../helpers/scrollToTop";

const TissueBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        scrollToTop();
        setTimeout(() => {
          setCurrentPage(pages[16]);
        }, 1000);
      }}
    >
      <LazyLoad height={200} offset={100}>
        <img
          className="info-btn"
          src={infoBtn}
          alt="Go to Shabbos Bathroom Tissue page"
        ></img>
      </LazyLoad>
    </button>
  );
};

export default TissueBtn;
