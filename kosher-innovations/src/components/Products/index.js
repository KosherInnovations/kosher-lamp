import React from "react";
import kLampWhite from "../../resources/kmax/white-kmax.png";
import travelLampWhite from "../../resources/travel-lamp/white-travel.png";
import bugChecker from "../../resources/bug-checker/bug-checker.png";
import warmingTray from "../../resources/warming-tray/warming-tray.png";
import scrubGlovesRed from "../../resources/scrub-gloves/gloves-red.png";
import blueShissel from "../../resources/smart-shissel/blue-shissel.png";
import goWash from "../../resources/go-wash/go-wash.png";
import kosherClock from "../../resources/kosher-clock/kosher-clock.png";
import fridgeez from "../../resources/fridg-eez/fridg-eez.png";
import bottleOpener from "../../resources/bottle-opener/bottle-opener.png";
import shroomLamp from "../../resources/shroom-lamp/red-shroom.png";
import tissueImg from "../../resources/tissue/tissue.png";
import alephBetImg from "../../resources/decals/aleph-bet.png";
import shabTooth from "../../resources/toothbrush/shabbos-toothbrush.png";
import weekTooth from "../../resources/toothbrush/uncle-moishy-toothbrush.png";
import KmaxColour from "../../KmaxColour";
import TravelColour from "../../TravelColour";
import GloveColours from "../../GloveColours";
import ShisselColours from "../../ShisselColours";
import ShroomColours from "../../ShroomColours";

const Products = () => {

  return (
    <>
      <section id="cards" className="product-cards">
        <div className="card">
          <div className="imgBox">
            <img src={kLampWhite} alt="KosherLamp MAX"></img>
            <h1>KosherLamp MAX</h1>
          </div>
          <div className="content">
            <h3>Select A Color : </h3>
            < KmaxColour />
            {/* <div className="color">
              <div className="color-picker kmax" id="kmax-white"></div>
              <div className="color-picker kmax" id="kmax-steel"></div>
              <div className="color-picker kmax" id="kmax-black"></div>
              <div className="color-picker kmax" id="kmax-blue"></div>
              <div className="color-picker kmax" id="kmax-bronze"></div>
              <div className="color-picker kmax" id="kmax-brown"></div>
              <div className="color-picker kmax" id="kmax-marble"></div>
              <div className="color-picker kmax" id="kmax-cherry"></div>
              <div className="color-picker kmax" id="kmax-ivory"></div>
              <div className="color-picker kmax" id="kmax-pink"></div>
            </div>
            <a className="kmax-cart" href="/">Add To Cart</a> */}
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={travelLampWhite} alt="travel lamp"></img>
            <h1>Travel Lamp</h1>
          </div>
          <div className="content">
            <h3>Select A Color</h3>
            < TravelColour />
            {/* <div className="color">
              <div className="color-picker" id="travel-white"></div>
              <div className="color-picker" id="travel-grey"></div>
              <div className="color-picker" id="travel-black"></div>
              <div className="color-picker" id="travel-brown"></div>
            </div>
            <a href="/">Add To Cart</a> */}
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
            <h3>Select A Color</h3>
            < GloveColours />
            {/* <div className="color">
              <div className="color-picker" id="gloves-red"></div>
              <div className="color-picker" id="gloves-blue"></div>
            </div>
            <a href="/">Add To Cart</a> */}
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={blueShissel} alt="smart shissel"></img>
            <h1>Smart Shissel</h1>
          </div>
          <div className="content">
          <h3>Select A Color</h3>
          < ShisselColours />
            {/* <div className="color">
              <div className="color-picker" id="shissel-grey"></div>
              <div className="color-picker" id="shissel-blue"></div>
              <div className="color-picker" id="shissel-beige"></div>
              <div className="color-picker" id="shissel-pink"></div>
            </div>
            <a href="/">Add To Cart</a> */}
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
            <img src={kosherClock} alt="kosher clock" id="kosher-clock"></img>
            <h1>Kosher Clock</h1>
          </div>
          <div className="content">
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={fridgeez} alt="fridg-eez"></img>
            <h1>Fridg-eez</h1>
          </div>
          <div className="content">
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={bottleOpener} alt="shabbos bottle opener "></img>
            <h1>Shabbos Bottle Opener </h1>
          </div>
          <div className="content">
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={shroomLamp} alt="mushroom kosher lamp"></img>
            <h1>Mushroom KosherLamp</h1>
          </div>
          <div className="content">
          <h3>Select A Color</h3>
          < ShroomColours />
            {/* <div className="color">
              <div className="color-picker" id="shroom-red"></div>
              <div className="color-picker" id="shroom-blue"></div>
              <div className="color-picker" id="shroom-pink"></div>
            </div>
            <a href="/">Add To Cart</a> */}
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={tissueImg} alt="shabbos bathroom tissue"></img>
            <h1>Shabbos Bathroom Tissue</h1>
          </div>
          <div className="content">
          <h3>Select A Type</h3>
            <div className="type">
              <div className="type-picker" id="trial-pack">
                <p>1 x 8 Pack</p>
              </div>
              <div className="type-picker" id="family-pack">
                <p>6 x 8 Pack</p>
              </div>
              <div className="type-picker" id="club-pack">
                <p>12 x 8 Pack</p>
              </div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={alephBetImg} alt="wall id decals"></img>
            <h1>Wall ID Decals</h1>
          </div>
          <div className="content">
          <h3>Select A Type</h3>
            <div className="type">
              <div className="type-picker" id="aleph-bet">
                <p>Aleph Bet</p>
              </div>
              <div className="type-picker" id="asher-yatzar">
                <p>Asher Yatzar</p>
              </div>
              <div className="type-picker" id="mitzvah-train">
                <p>Mitzvah Train</p>
              </div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={shabTooth} alt="shabbos toothbrush"></img>
            <h1>Shabbos Toothbrush</h1>
          </div>
          <div className="content">
          <h3>Select A Color</h3>
            <div className="color">
              <div className="color-picker" id="shabtooth-red"></div>
              <div className="color-picker" id="shabtooth-purple"></div>
              <div className="color-picker" id="shabtooth-blue"></div>
              <div className="color-picker" id="shabtooth-yellow"></div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={weekTooth} alt="weekday toothbrush"></img>
            <h1>Uncle Moishy Weekday Toothbrush</h1>
          </div>
          <div className="content">
          <h3>Select A Color</h3>
            <div className="color">
              <div className="color-picker" id="weektooth-red"></div>
              <div className="color-picker" id="weektooth-green"></div>
              <div className="color-picker" id="weektooth-blue"></div>
              <div className="color-picker" id="weektooth-yellow"></div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
