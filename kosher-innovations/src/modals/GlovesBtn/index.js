import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";

const GlovesBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        setCurrentPage(pages[6]);
      }}
    >
      <LazyLoad height={200} offset={100}>
        <img className="info-btn" src={infoBtn} alt="Go to Shabbos Scrub Gloves page"></img>
      </LazyLoad>
    </button>
  );
};

export default GlovesBtn;