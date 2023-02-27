import React, { useEffect } from "react";
import backgroundImg from "../../resources/dark-pattern-bg.webp";
// import changeLettersDark from "../../helpers/changeLettersDark";
 import changeLettersLight from "../../helpers/changeLettersLight"
import LazyLoad from "react-lazyload";
import displayProd1 from "../../resources/travel-lamp/4Lamps-lit.webp";
import displayProd2 from "../../resources/kmax/example-2.webp";
import displayProd3 from "../../resources/warming-tray/warmtray-example.webp";
import displayProd4 from "../../resources/kosher-clock/kc3-example.webp";
import kiLogo from "../../resources/kmax/all-kmax.webp";

const HomePage = (props) => {
  const { pages = [], setCurrentPage } = props;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // changeLettersDark();
    changeLettersLight();
  }, []);

  return (
    <section id="home">
      <img className="bg-img" src={backgroundImg} alt="background"></img>
      <div className="banner-container">
        <header className="banner-statement">
          <h1>
            Kosher<br></br>Innovations
          </h1>
          <h2>The Makers of Your favorite Jewish Home Products</h2>
        </header>
        <button
          onClick={() => {
            setCurrentPage(pages[1]);
            scrollToTop();
          }}
        >
          View Products
        </button>
      </div>
      <div className="display-grid">
        <div className="container">
          <LazyLoad height={200} offset={100}>
            <img
              className="display-card card-1"
              src={displayProd1}
              alt="display product"
            ></img>
          </LazyLoad>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button
              onClick={() => {
                setCurrentPage(pages[5]);
                scrollToTop();
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="container">
          <LazyLoad height={200} offset={100}>
            <img
              className="display-card card-2"
              src={displayProd2}
              alt="display product"
            ></img>
          </LazyLoad>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button
              onClick={() => {
                setCurrentPage(pages[6]);
                scrollToTop();
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="feature-area">
        <header title="Kosher Innovations">
          <LazyLoad height={200} offset={100}>
            <img
              src={kiLogo}
              alt="Kosher Innovations"
              className="ki-logo"
            ></img>
          </LazyLoad>
        </header>
      </div>
      <div className="display-grid">
        <div className="container">
          <LazyLoad height={200} offset={100}>
            <img
              className="display-card card-3"
              src={displayProd3}
              alt="display product"
            ></img>
          </LazyLoad>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button
              onClick={() => {
                setCurrentPage(pages[7]);
                scrollToTop();
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="container">
          <LazyLoad height={200} offset={100}>
            <img
              className="display-card card-4"
              src={displayProd4}
              alt="display product"
            ></img>
          </LazyLoad>
          <div className="card-info-area">
            <h1>KosherLamp</h1>
            <p>
              HJFJAF ajsOIAJSFIOJ AISJDIOJSAIOD IAJSFOIJSAIF IAJSFIOJAIOF
              AOISJFOIAS ASIJFOIASJF aSJDIOASJD ASFOIASJF
            </p>
            <button
              onClick={() => {
                setCurrentPage(pages[8]);
                scrollToTop();
              }}
            >
              Learn More
            </button>
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
        <button
          onClick={() => {
            setCurrentPage(pages[1]);
            scrollToTop();
          }}
        >
          View Products
        </button>
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
