import React from "react";
import homeBanner1 from "../../resources/ki-banner-detailed.jpg";
import homeBanner2 from "../../resources/kmax-5-colours.jpg";
import kiLogo from "../../resources/ki-banner.jpg";

const HomePage = () => {
  return (
    <section id="home">
      <div className="banner-container">
        <img
          className="bannerImg1"
          src={homeBanner1}
          alt="Kosher Innovations homepage banner"
        ></img>
        <img
          className="bannerImg2"
          src={homeBanner2}
          alt="Kosher Innovations homepage banner"
        ></img>
      </div>
      <div className="display-grid">
        <div className="display-card card-1"></div>
        <div className="display-card card-2"></div>
      </div>
      <div className="feature-area">
        <h1 title="Kosher Innovations">
          <img src={kiLogo} alt="Kosher Innovations" className="ki-logo"></img>
        </h1>
      </div>
      <div className="display-grid">
        <div className="display-card card-3"></div>
        <div className="display-card card-4"></div>
      </div>
      <div className="feature-area">
        <p>
          Although we are best known as the creators of the The KosherLamp™
          brand ShabbosLamp, we have produced other popular items such as the
          Bug Checker Portable Light Board, the KosherClock, the Shabbos
          Toothbrush and the Shabbos Toothwash. And we won't stop there. We are
          always working on new and exciting ideas.</p>
          <br></br>
          <br></br>
          <button>View Products</button>
          <br></br>
          <br></br><p>
          Our goal is to invent and market creative products that benefit the
          Shomer Shabbat community. We are constantly exploring ideas for Jewish
          products that are practical, innovative and halachically permissible.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
