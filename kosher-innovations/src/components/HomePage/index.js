import React from "react";
import homeBanner from "../../resources/ki-logo.webp";

const HomePage = () => {
  return (
    <section id="home">
      <div className="banner-container">
        <img className="banner" src={homeBanner} alt="Kosher Innovations homepage banner"></img>
      </div>
      <div className="display-grid">
        <div className="display-card card-1"></div>
        <div className="display-card card-2"></div>
      </div>
    </section>
  );
};

export default HomePage;
