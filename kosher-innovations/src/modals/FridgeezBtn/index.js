import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";

const FridgeezBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        setCurrentPage(pages[6]);
      }}
    >
      <LazyLoad height={200} offset={100}>
        <img className="info-btn" src={infoBtn} alt="Go to Fridg-eez page"></img>
      </LazyLoad>
    </button>
  );
};

export default FridgeezBtn;