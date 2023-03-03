import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";

const ShabToothBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        setCurrentPage(pages[6]);
      }}
    >
      <LazyLoad height={200} offset={100}>
        <img className="info-btn" src={infoBtn} alt="Go to Shabbos Toothbrush page"></img>
      </LazyLoad>
    </button>
  );
};

export default ShabToothBtn;