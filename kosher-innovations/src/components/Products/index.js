import React from "react";
import kLampWhite from "../../resources/kmax/white-kmax.png";
import travelLampWhite from "../../resources/travel-lamp/white-travel.jpg";
import bugChecker from "../../resources/bug-checker/bug-checker.jpg";
import warmingTray from "../../resources/warming-tray/warming-tray.jpg";
import scrubGlovesRed from "../../resources/scrub-gloves/gloves-red.png";
import smartShissel from "../../resources/smart-shissel/smart-shissel.jpg";
import goWash from "../../resources/go-wash/go-wash.jpg";
import kosherClock from "../../resources/kosher-clock/kosher-clock.jpg";

const Products = () => {
  return (
    <>
      <section className="product-cards">
        <div className="card">
          <div className="imgBox">
            <img src={kLampWhite} alt="KosherLamp MAX"></img>
            <h1>KosherLamp MAX</h1>
          </div>
          <div className="content">
            <h3>Color : </h3>
            <div className="color">
              <div className="color-picker" id="kmax-white"></div>
              <div className="color-picker" id="kmax-steel"></div>
              <div className="color-picker" id="kmax-black"></div>
              <div className="color-picker" id="kmax-blue"></div>
              <div className="color-picker" id="kmax-bronze"></div>
              <div className="color-picker" id="kmax-brown"></div>
              <div className="color-picker" id="kmax-marble"></div>
              <div className="color-picker" id="kmax-cherry"></div>
              <div className="color-picker" id="kmax-ivory"></div>
              <div className="color-picker" id="kmax-pink"></div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={travelLampWhite} alt="travel lamp"></img>
            <h1>Travel Lamp</h1>
          </div>
          <div className="content">
            <h3>Color :</h3>
            <div className="color">
              <div className="color-picker" id="travel-white"></div>
              <div className="color-picker" id="travel-grey"></div>
              <div className="color-picker" id="travel-black"></div>
              <div className="color-picker" id="travel-brown"></div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={bugChecker} alt="bug checker"></img>
            <h1>Bug Checker</h1>
          </div>
          <div className="content">
            <a href="https://www.kosherimage.com/cmd.php?pid=e418af322bd347a18412af62a324be4e">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={warmingTray} alt="shabbos warming tray"></img>
            <h1>Shabbos Safe Warming Tray</h1>
          </div>
          <div className="content">
            <a href="https://www.kosherimage.com/cmd.php?pid=e418af322bd347a18412af62a324be4e">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={scrubGlovesRed} alt="shabbos scrub gloves"></img>
            <h1>Shabbos Scrub Gloves</h1>
          </div>
          <div className="content">
            <h3>Color :</h3>
            <div className="color">
              <div className="color-picker" id="gloves-red"></div>
              <div className="color-picker" id="gloves-blue"></div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={smartShissel} alt="smart shissel"></img>
            <h1>Smart Shissel</h1>
          </div>
          <div className="content">
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={goWash} alt="go wash"></img>
            <h1>Go Wash</h1>
          </div>
          <div className="content">
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={kosherClock} alt="kosher clock"></img>
            <h1>Kosher Clock</h1>
          </div>
          <div className="content">
            <a href="/">Add To Cart</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
