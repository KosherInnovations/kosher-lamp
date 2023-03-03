import React from "react";
import LazyLoad from "react-lazyload";
import infoBtn from "../../resources/info.webp";

const DecalBtn = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <button
      onClick={() => {
        setCurrentPage(pages[6]);
      }}
    >
      <LazyLoad height={200} offset={100}>
        <img className="info-btn" src={infoBtn} alt="Go to Jewish Wall Decals page"></img>
      </LazyLoad>
    </button>
  );
};

export default DecalBtn;