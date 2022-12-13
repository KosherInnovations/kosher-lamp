import React from "react";
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
import KmaxCard from "../../classes/KmaxCard";
import TravelCard from "../../classes/TravelCard";
import GloveCard from "../../classes/GloveCard";
import ShisselColours from "../../classes/ShisselColours";
import ShroomColours from "../../classes/ShroomColours";
import TissueTypes from "../../classes/TissueTypes";
import DecalTypes from "../../classes/DecalTypes";

const Products = () => {

  return (
    <>
      <section id="cards" className="product-cards">
        < KmaxCard />
        < TravelCard />
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
            <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=3d47a903d7454e30b3a5b3d4323532af">Add To Cart</a>
          </div>
        </div>
        < GloveCard />
        <div className="card">
          <div className="imgBox">
            <img src={blueShissel} alt="smart shissel"></img>
            <h1>Smart Shissel</h1>
          </div>
          <div className="content">
          <h3>Click On A Color</h3>
          < ShisselColours />
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={goWash} alt="go wash"></img>
            <h1>Go Wash</h1>
          </div>
          <div className="content">
            <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=76d33ab9cfbe438fa25c8876e344c439">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={kosherClock} alt="kosher clock" id="kosher-clock"></img>
            <h1>Kosher Clock</h1>
          </div>
          <div className="content">
            <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4bb9fb8c67954716bc68708634c6c8ae">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={fridgeez} alt="fridg-eez"></img>
            <h1>Fridg-eez</h1>
          </div>
          <div className="content">
            <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=6cbbe188b0a54a2ebff575e09afc25ac">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={bottleOpener} alt="shabbos bottle opener "></img>
            <h1>Shabbos Bottle Opener </h1>
          </div>
          <div className="content">
            <a href="https://www.kosherimage.com/cmd.php?pid=a9f059a9b16d4f12a9f10f188911df3b">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={shroomLamp} alt="mushroom kosher lamp"></img>
            <h1>Mushroom KosherLamp</h1>
          </div>
          <div className="content">
          <h3>Click On A Color</h3>
          < ShroomColours />
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={tissueImg} alt="shabbos bathroom tissue"></img>
            <h1>Shabbos Bathroom Tissue</h1>
          </div>
          <div className="content">
          <h3>Click On A Type</h3>
          < TissueTypes />
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={alephBetImg} alt="wall id decals"></img>
            <h1>Wall ID Decals</h1>
          </div>
          <div className="content">
          <h3>Click On A Type</h3>
          < DecalTypes />
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={shabTooth} alt="shabbos toothbrush"></img>
            <h1>Shabbos Toothbrush</h1>
          </div>
          <div className="content">
          <h3>1 x 4 Pack</h3>
          <a href="https://www.kosherimage.com/cmd.php?pid=d73562f0b42637d3268b40b7e85e7f33">Add To Cart</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={weekTooth} alt="weekday toothbrush"></img>
            <h1>Uncle Moishy Weekday Toothbrush</h1>
          </div>
          <div className="content">
          <h3>1 x 4 Pack</h3>
          <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=db93a1eee8ae4979b5a3112c3ef94f28">Add To Cart</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
