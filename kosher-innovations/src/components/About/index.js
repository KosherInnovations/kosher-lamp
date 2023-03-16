import React, { useEffect, useRef } from "react";
import backgroundImg from "../../resources/dark-pattern-bg.webp";
import RunAboutAnimation from "../../helpers/animations/RunAboutAnimation";
import LazyLoad from "react-lazyload";
import changeLettersLight from "../../helpers/changeLettersLight";
import downIcon from "../../resources/down-icon.webp";
import scrollToTop from "../../helpers/scrollToTop";
import travelWhite from "../../resources/travel-lamp/white-travel.webp";
import travelGrey from "../../resources/travel-lamp/grey-travel.webp";
import travelBrown from "../../resources/travel-lamp/brown-travel.webp";
import kmaxSteel from "../../resources/kmax/silver-kmax.webp";
import kmaxBlack from "../../resources/kmax/black-kmax.webp";
import kmaxBlue from "../../resources/kmax/blue-kmax.webp";
import kosherClock from "../../resources/kosher-clock/kosherclock.webp";
import scrubGlovesRed from "../../resources/scrub-gloves/gloves-red.webp";

const About = (props) => {
  const { pages = [], setCurrentPage } = props;

  const aboutRef = useRef(null);
  useEffect(() => {
    RunAboutAnimation(aboutRef.current);
    changeLettersLight();
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <img
        className="bg-img"
        src={backgroundImg}
        alt="background"
        rel="prefetch"
      ></img>
      <div className="ki-info">
        <div className="header-container">
          <h1>Who We Are</h1>
          <img className="down-icon" src={downIcon} alt="scroll down"></img>
        </div>
        <div className="info-flexbox info-flexbox-first">
          <div className="info-container info-left">
            <p className="info-box">
              We are a small Jewish company based out of Toronto. Our name
              explains our mission:{" "}
              <span title="Kosher Innovations mission statement">
                Our goal is to invent and market creative products that benefit
                the Shomer Shabbat community.
              </span>{" "}
              We are constantly exploring ideas for Jewish products that are
              practical, innovative and halachically permissible. We make sure
              that all of our products are approved by leading poskim.
            </p>
          </div>
          <div className="info-image-container info-right">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="lamp"
                src={kmaxSteel}
                alt="Steel KosherLamp MAX"
                title="KosherLamp MAX"
              ></img>
            </LazyLoad>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="info-flexbox reverse">
          <div className="info-image-container info-left">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="lamp"
                src={travelWhite}
                alt="White Travel KosherLamp "
                title="Travel KosherLamp"
              ></img>
            </LazyLoad>
          </div>
          <div className="info-container info-right">
            <p className="info-box">
              Although we are best known as the creators of the{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[6]);
                  }, 1000);
                }}
              >
                KosherLamp&trade;
              </button>
              , we have produced other popular items such as the{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[5]);
                  }, 1000);
                }}
              >
                Travel KosherLamp
              </button>
              ,{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[7]);
                  }, 1000);
                }}
              >
                Bug Checker Portable Light Board&trade;
              </button>
              , the{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[12]);
                  }, 1000);
                }}
              >
                KosherClock&trade;
              </button>
              , and the{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[18]);
                  }, 1000);
                }}
              >
                Shabbos Toothbrush&trade;
              </button>{" "}
              We are always working on new and exciting ideas. Check back from
              time to time to see what's new!
            </p>
          </div>
        </div>
        <h1>How We Started</h1>
        <div className="info-flexbox">
          <div className="info-container info-left">
            <p className="info-box">
              It all started when Rebbitzen Chana who is an avid reader, asked
              her husband Reb Shmuel if there was a way to hook up some kind of
              bedside light so she could read in the bedroom on Shabbos. As
              Hashgacha would have it, one of Reb Shmuel’s congregants, Moshe
              Orzech z"l, was in the lighting business.
            </p>
          </div>
          <div className="info-image-container info-right">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="lamp"
                src={kmaxBlack}
                alt="Black KosherLamp MAX"
                title="KosherLamp MAX"
              ></img>
            </LazyLoad>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="info-flexbox reverse">
          <div className="info-image-container info-left">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="lamp"
                src={travelGrey}
                alt="Grey Travel KosherLamp"
                title="Travel KosherLamp"
              ></img>
            </LazyLoad>
          </div>
          <div className="info-container info-right">
            <p className="info-box">
              Reb Shmuel and Moshe began to create a prototype for this new type
              of lamp. After much experimentation, and testing, they were ready
              to start production of this new innovation, the{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[6]);
                  }, 1000);
                }}
              >
                KosherLamp&trade;
              </button>
              .
            </p>
          </div>
        </div>

        <div className="separation-line"></div>
        <div className="info-flexbox fourth-box">
          <div className="info-container info-left">
            <p className="info-box">
              On his many trips visiting factories overseas, Moshe was able to
              select a place to manufacture and refine the{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[6]);
                  }, 1000);
                }}
              >
                KosherLamp&trade;
              </button>{" "}
              until it was just right. Letters were soon filed by a patent
              attorney, a website was set up and poskim were consulted.
            </p>
          </div>
          <div className="info-image-container info-right">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="lamp"
                src={kmaxBlue}
                alt="Blue KosherLamp MAX"
                title="KosherLamp MAX"
              ></img>
            </LazyLoad>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="info-flexbox reverse">
          <div className="info-image-container info-left">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="lamp"
                src={travelBrown}
                alt="Brown Travel KosherLamp"
                title="Travel KosherLamp"
              ></img>
            </LazyLoad>
          </div>
          <div className="info-container info-right">
            <p className="info-box">
              The initial model of{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[6]);
                  }, 1000);
                }}
              >
                KosherLamp&trade;
              </button>{" "}
              was an instant success. Stores in Canada and the United States
              started to carry it and then interest spread to Israel, Europe,
              South Africa, Australia and South America.
            </p>
          </div>
        </div>
        <h1>What We Do Now</h1>
        <div className="info-flexbox">
          <div className="info-container info-left">
            <p className="info-box">
              After the success of the{" "}
              <button
                onClick={() => {
                  scrollToTop();
                  setTimeout(() => {
                    setCurrentPage(pages[6]);
                  }, 1000);
                }}
              >
                KosherLamp&trade;
              </button>
              ,{" "}<span>Kosher Innovations&trade;</span>{" "}is still working on
              producing practical and innovative new products to enhance the
              Jewish home. All it takes is a few thoughts like "What if" and
              "Wouldn't it be great if..." to get something started.
            </p>
          </div>
          <div className="info-image-container info-right">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="featured-info-image gloves"
                src={scrubGlovesRed}
                alt="Red Shabbos Scrub Gloves"
                title="Shabbos Scrub Gloves"
              ></img>
            </LazyLoad>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="info-flexbox reverse">
          <div className="info-image-container info-left">
            <LazyLoad height={200} offset={400}>
              <img
                rel="prefetch"
                className="featured-info-image clock"
                src={kosherClock}
                alt="KosherClock"
                title="KosherClock"
              ></img>
            </LazyLoad>
          </div>
          <div className="info-container info-right">
            <p className="info-box">
              Who knows what<span> Kosher Innovations&trade;</span> will come up
              with next? Check your local Judaica store, Kosher grocer,
              hardware, pharmacy or other Jewish stores for new{" "}
              <span> Kosher Innovations&trade;</span> products.
              <br></br>
              <i className="map-link-container">
                Or check out our{" "}
                <a
                  className="map-link"
                  href="https://www.google.com/maps/d/viewer?mid=15-DxkcwmeXGIyUiBxfB2ibOJbtQ&hl=en&ll=-3.81666561775622e-14%2C-90.006665&z=1"
                >
                  map
                </a>{" "}
                to find a retailer near you
              </i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
