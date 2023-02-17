import React from "react";
import homeBanner1 from "../../resources/ki-banner-detailed.jpg";
import homeBanner2 from "../../resources/kmax-5-colours.jpg";
import displayProd1 from "../../resources/travel-lamp/4Lamps-lit.jpg";
import displayProd2 from "../../resources/kmax/example-2.jpg";
import displayProd3 from "../../resources/warming-tray/warmtray-example.png";
import displayProd4 from "../../resources/kosher-clock/kc3-example.png";
import kiLogo from "../../resources/ki-banner.jpg";

const HomePage = () => {
  return (
    <section id="home">
      <div className="banner-container">
        <header className="banner-statement">
          <h1>
            Kosher<br></br>Innovations
          </h1>
          <h2>The Makers of Your favorite Jewish Home Products</h2>
        </header>
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
        <div className="container">
          <img
            className="display-card card-1"
            src={displayProd1}
            alt="display product"
          ></img>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="container">
          <img
            className="display-card card-2"
            src={displayProd2}
            alt="display product"
          ></img>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="feature-area">
        <header title="Kosher Innovations">
          <img src={kiLogo} alt="Kosher Innovations" className="ki-logo"></img>
        </header>
      </div>
      <div className="display-grid">
        <div className="container">
          <img
            className="display-card card-3"
            src={displayProd3}
            alt="display product"
          ></img>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="container">
          <img
            className="display-card card-4"
            src={displayProd4}
            alt="display product"
          ></img>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="feature-area">
        <p>
          Although we are best known as the creators of the The KosherLamp™
          brand ShabbosLamp, we have produced other popular items such as the
          Bug Checker Portable Light Board, the KosherClock, the Shabbos
          Toothbrush and the Shabbos Toothwash. And we won't stop there. We are
          always working on new and exciting ideas.
        </p>
        <br></br>
        <br></br>
        <button>View Products</button>
        <br></br>
        <br></br>
        <p>
          Our goal is to invent and market creative products that benefit the
          Shomer Shabbat community. We are constantly exploring ideas for Jewish
          products that are practical, innovative and halachically permissible.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
