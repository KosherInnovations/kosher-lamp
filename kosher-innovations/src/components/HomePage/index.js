import React, { useEffect, useRef } from "react";
import backgroundImg from "../../resources/dark-pattern-bg.webp";
import homepageImg from "../../resources/KosherInnovations.webp";
// import changeLettersDark from "../../helpers/changeLettersDark";
import RunHomePageAnimation from "../../helpers/animations/RunHomePageAnimation";
import changeLettersLight from "../../helpers/changeLettersLight";
import LazyLoad from "react-lazyload";
import displayProd1 from "../../resources/travel-lamp/4Lamps-lit.webp";
import displayProd2 from "../../resources/MAX BGW.png";
import displayProd3 from "../../resources/warming-tray/warmtray-example.webp";
import displayProd4 from "../../resources/kosher-clock/kc3.png";
import kiLogo from "../../resources/kmax/all-kmax.webp";
import scrollToTop from "../../helpers/scrollToTop";

const HomePage = (props) => {
  const appRef = useRef(null);
  const { pages = [], setCurrentPage } = props;

  useEffect(() => {
    // changeLettersDark();
    RunHomePageAnimation(appRef.current);
    changeLettersLight();
  }, []);

  return (
    <section id="home" ref={appRef}>
      <img className="bg-img" src={backgroundImg} alt="background"></img>
      <div className="banner-container">
        <header className="banner-statement">
          <h1 title="Kosher Innovations, The KosherLamp People">
            {/* Kosher<br></br>Innovations */}
            <img src={homepageImg} alt="Kosher Innovations"></img>
          </h1>
          <h2>
            <em>
              Practical and Innovative products to enhance the Jewish home
            </em>
          </h2>
        </header>
        <button
          onClick={() => {
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[1]);
            }, 1000);
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
            <h1>Travel KosherLamp</h1>
            <p>
              Small enough for travel while still bright enough to light up an
              entire room.
            </p>
            <button
              onClick={() => {
                scrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[5]);
                }, 1000);
              }}
            >
              See Travel KosherLamp
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
            <h1>KosherLamp MAX</h1>
            <p>
              An aestheically pleasing lamp which is handy for shutting out the
              lights on Shabbos and Yom Tov
            </p>
            <button
              onClick={() => {
                scrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[6]);
                }, 1000);
              }}
            >
              See KosherLamp MAX
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
            <h1>Shabbos Safe Warming Tray</h1>
            <p>
              A functional and sleek warming tray used to safely heat food to
              the perfect temperature on shabbos, in accordance with halacha
            </p>
            <button
              onClick={() => {
                scrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[8]);
                }, 1000);
              }}
            >
              See Shabbos Safe Warming Tray
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
            <h1>KosherClock</h1>
            <p>
              Our portable clock that keeps your schedule running on Shabbat &
              Yom Tov
            </p>
            <button
              onClick={() => {
                scrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[12]);
                }, 1000);
              }}
            >
              See KosherClock
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
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[1]);
            }, 1000);
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
