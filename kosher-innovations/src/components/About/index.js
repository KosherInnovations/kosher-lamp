import React, { useEffect, useRef } from "react";
import backgroundImg from "../../resources/dark-pattern-bg.webp";
import RunAboutAnimation from "../../helpers/animations/RunAboutAnimation";
import changeLettersLight from "../../helpers/changeLettersLight";
import travelBlack from "../../resources/travel-lamp/black-travel.webp";
import kmaxSteel from "../../resources/kmax/silver-kmax.webp";
import warmTray from "../../resources/warming-tray/warming-tray.webp";
import bugChecker from "../../resources/bug-checker/bug-checker.webp";
import scrubGlovesRed from "../../resources/scrub-gloves/gloves-red.webp";

const About = () => {
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
        <h1>Who We Are</h1>
        <div className="info-flexbox info-flexbox-first">
          <div className="info-container info-left">
            <p className="info-box">
              We are a small Jewish company based out of Toronto. (Yes, our
              office is in Canada!) Our name explains our mission: Our goal is
              to invent and market creative products that benefit the Shomer
              Shabbat community.<br></br>
              <br></br>We are constantly exploring ideas for Jewish products
              that are practical, innovative and halachically permissible. We
              make sure that all of our products are approved by leading poskim
              (Rabbinical Authorities who specialize in specific Torah laws).
            </p>
          </div>
          <div className="info-image-container info-right">
            <img
              rel="prefetch"
              className="lamp"
              src={kmaxSteel}
              alt="Steel KosherLamp MAX"
            ></img>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="info-flexbox second-box">
          <div className="info-image-container info-left">
            <img
              rel="prefetch"
              className="lamp"
              src={travelBlack}
              alt="Black Travel Lamp"
            ></img>
          </div>
          <div className="info-container info-right">
            <p className="info-box">
              That way, you can be assured that any Kosher Innovations product
              meets all halachically applicable requirements such as for keeping
              Shabbat or Kashrut.<br></br>
              <br></br>Although we are best known as the creators of the
              KosherLamp, we have produced other popular items such as the Bug
              Checker Portable Light Board, the KosherClock, the Shabbos
              Toothbrush and the Shabbos Toothwash. And we won't stop there. We
              are always working on new and exciting ideas. Check back from time
              to time to see what's new!
            </p>
          </div>
        </div>
        <h1>How We Started</h1>
        <div className="info-flexbox">
          <div className="info-container info-left">
            <p className="info-box">
              It all started when Rebbitzen Chana who is an avid reader, asked
              her husband Reb Shmuel if there was a way to hook up some kind of
              bedside light so she could read in the bedroom on Shabbos.
              <br></br>
              <br></br>After looking through the seforim, it appeared that even
              though many poskim held that the actual “lamp” should only be
              moved with a shinui, a lamp could be made with a moveable shade
              that could totally darken the lamp. As Hashgacha (Providence)
              would have it, one of Reb Shmuel’s congregants, Moshe Orzech z"l,
              was in the lighting business. Reb Shmuel and Moshe began to create
              a prototype for this new type of lamp. After much experimentation,
              and testing, they were ready to start production of this new
              innovation, the KosherLamp.
            </p>
          </div>
          <div className="info-image-container info-right">
            <img
              rel="prefetch"
              className="featured-info-image"
              src={warmTray}
              alt="Shabbos Safe Warming Tray"
            ></img>
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="info-flexbox fourth-box">
          <div className="info-image-container info-left">
            <img
              rel="prefetch"
              className="featured-info-image"
              src={bugChecker}
              alt="Bug Checker MAX"
            ></img>
          </div>
          <div className="info-container info-right">
            <p className="info-box">
              On his many trips visiting factories overseas, Moshe was able to
              select a place to manufacture and refine the KosherLamps until it
              was just right. Letters were soon filed by a patent attorney, a
              website was set up and poskim were consulted. The initial model of
              KOSHERLAMP™ was an instant success. Stores in Canada and the
              United States started to carry it and then interest spread to
              Israel, Europe, South Africa, Australia and South America.
            </p>
          </div>
        </div>
        <h1>What We Do Now</h1>
        <div className="info-flexbox">
          <div className="info-container info-left">
            <p className="info-box">
              After the success of the KosherLamp™, Kosher Innovations is still
              working on producing practical and innovative new products to
              enhance the Jewish home. All it takes is a few thoughts like "What
              if" and "Wouldn't it be great if..." to get something started.
              <br></br>
              <br></br>Who knows what Kosher Innovations will come up with next?
              Check your local Judaica store, Kosher grocer, hardware, pharmacy
              or other Jewish stores for new Kosher Innovations products.
              <br></br>
              <br></br>
              Or check out our{" "}
              <a
                className="map-link"
                href="https://www.google.com/maps/d/viewer?mid=15-DxkcwmeXGIyUiBxfB2ibOJbtQ&hl=en&ll=-3.81666561775622e-14%2C-90.006665&z=1"
              >
                map
              </a>{" "}
              to find a retailer near you
            </p>
          </div>
          <div className="info-image-container info-right">
            <img
              rel="prefetch"
              className="featured-info-image gloves"
              src={scrubGlovesRed}
              alt="Red Shabbos Scrub Gloves"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
