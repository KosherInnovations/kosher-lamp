import React from "react";
import bugChecker from "../../resources/bug-checker/bug-checker.png";
import BugCheckerModal from "../../modals/BugCheckerModal";
import warmingTray from "../../resources/warming-tray/warming-tray.png";
import WarmTrayModal from "../../modals/WarmTrayModal";
import goWash from "../../resources/go-wash/go-wash.png";
import GoWashModal from "../../modals/GoWashModal";
import kosherClock from "../../resources/kosher-clock/kosher-clock.png";
import KosherClockModal from "../../modals/KosherClockModal";
import fridgeez from "../../resources/fridg-eez/fridg-eez.png";
import FridgeezModal from "../../modals/FridgeezModal";
import bottleOpener from "../../resources/bottle-opener/bottle-opener.png";
import OpenerModal from "../../modals/OpenerModal";
import tissueImg from "../../resources/tissue/tissue.png";
import shabTooth from "../../resources/toothbrush/shabbos-toothbrush.png";
import ShabToothModal from "../../modals/ShabToothModal";
import weekTooth from "../../resources/toothbrush/uncle-moishy-toothbrush.png";
import WeekToothModal from "../../modals/WeekToothModal";
import KmaxCard from "../../classes/KmaxCard";
import TravelCard from "../../classes/TravelCard";
import GloveCard from "../../classes/GloveCard";
import ShisselCard from "../../classes/ShisselCard";
import ShroomCard from "../../classes/ShroomCard";
import TissueTypes from "../../classes/TissueTypes";
import DecalCard from "../../classes/DecalCard";

const Products = () => {
  return (
    <>
      <section id="cards" className="product-cards">
        <KmaxCard />
        <TravelCard />
        <div className="card">
          <div className="imgBox">
            <img src={bugChecker} alt="bug checker"></img>
            <h1>Bug Checker</h1>
          </div>
          <div className="content">
            <div className="flex-box">
              <a href="https://www.kosherimage.com/cmd.php?pid=e418af322bd347a18412af62a324be4e">
                Add To Cart
              </a>
              <BugCheckerModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={warmingTray} alt="shabbos safe warming tray"></img>
            <h1>Shabbos Safe Warming Tray</h1>
          </div>
          <div className="content">
            <div className="flex-box">
              <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=3d47a903d7454e30b3a5b3d4323532af">
                Add To Cart
              </a>
              <WarmTrayModal />
            </div>
          </div>
        </div>
        <GloveCard />
        <ShisselCard />
        <div className="card">
          <div className="imgBox">
            <img src={goWash} alt="go wash"></img>
            <h1>Go Wash</h1>
          </div>
          <div className="content">
            <div className="flex-box">
              <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=76d33ab9cfbe438fa25c8876e344c439">
                Add To Cart
              </a>
              <GoWashModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={kosherClock} alt="kosher clock" id="kosher-clock"></img>
            <h1>Kosher Clock</h1>
          </div>
          <div className="content">
            <div className="flex-box">
              <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4bb9fb8c67954716bc68708634c6c8ae">
                Add To Cart
              </a>
              <KosherClockModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={fridgeez} alt="fridg-eez"></img>
            <h1>Fridg-eez</h1>
          </div>
          <div className="content">
            <div className="flex-box">
              <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=6cbbe188b0a54a2ebff575e09afc25ac">
                Add To Cart
              </a>
              <FridgeezModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={bottleOpener} alt="shabbos bottle opener "></img>
            <h1>Shabbos Bottle Opener </h1>
          </div>
          <div className="content">
            <div className="flex-box">
              <a href="https://www.kosherimage.com/cmd.php?pid=a9f059a9b16d4f12a9f10f188911df3b">
                Add To Cart
              </a>
              <OpenerModal />
            </div>
          </div>
        </div>
        <ShroomCard />
        <div className="card">
          <div className="imgBox">
            <img src={tissueImg} alt="shabbos bathroom tissue"></img>
            <h1>Shabbos Bathroom Tissue</h1>
          </div>
          <div className="content">
            <h3>Click On A Type</h3>
            <TissueTypes />
          </div>
        </div>
        <DecalCard />
        <div className="card">
          <div className="imgBox">
            <img src={shabTooth} alt="shabbos toothbrush"></img>
            <h1>Shabbos Toothbrush</h1>
          </div>
          <div className="content">
            <h3>1 x 4 Pack</h3>
            <div className="flex-box">
              <a href="https://www.kosherimage.com/cmd.php?pid=d73562f0b42637d3268b40b7e85e7f33">
                Add To Cart
              </a>
              <ShabToothModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={weekTooth} alt="weekday toothbrush"></img>
            <h1>Uncle Moishy Weekday Toothbrush</h1>
          </div>
          <div className="content">
            <h3>1 x 4 Pack</h3>
            <div className="flex-box">
              <a href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=db93a1eee8ae4979b5a3112c3ef94f28">
                Add To Cart
              </a>
              <WeekToothModal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
