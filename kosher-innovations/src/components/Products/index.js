import React from "react";
// The hardcoded card components
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
import shabTooth from "../../resources/toothbrush/shabbos-toothbrush.png";
import ShabToothModal from "../../modals/ShabToothModal";
import weekTooth from "../../resources/toothbrush/uncle-moishy-toothbrush.png";
import WeekToothModal from "../../modals/WeekToothModal";
// The imported card components
import KmaxCard from "../../classes/KmaxCard";
import TravelCard from "../../classes/TravelCard";
import GloveCard from "../../classes/GloveCard";
import ShisselCard from "../../classes/ShisselCard";
import shroomImg from "../../resources/shroom-lamp/red-shroom.png";
import ShroomModal from "../../modals/ShroomModal";
import TissueCard from "../../classes/TissueCard";
import DecalCard from "../../classes/DecalCard";

const Products = () => {
  return (
      <section id="cards" className="product-cards">
      <h2 className="shipping-header">Orders to New York State and New Jersey tend to arrive in a week or less. For other areas, please allow up to two weeks. These times are approximate.<br></br>Shipping Within USA Only</h2>
        <KmaxCard />
        <TravelCard />
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 title="Bug Checker">Bug Checker</h1>
            </header>
            <img
              src={bugChecker}
              alt="The Bug Checker, a tool used to check fresh produce for bugs"
              title="Bug Checker"
            ></img>
          </div>
          <div className="content">
            <div className="flex-box-products-page">
              <a
                href="https://www.kosherimage.com/cmd.php?pid=e418af322bd347a18412af62a324be4e"
                title="add Bug Checker to cart"
              >
                Add To Cart
              </a>
              <BugCheckerModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 title="Shabbos Safe Warming Tray">
                Shabbos Safe Warming Tray
              </h1>
            </header>
            <img
              src={warmingTray}
              alt="The Shabbos Safe Warming Tray, a tool used to safely heat food on shabbos, in accordance with halacha"
              title="Shabbos Safe Warming Tray"
            ></img>
          </div>
          <div className="content">
            <div className="flex-box-products-page">
              <a
                href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=3d47a903d7454e30b3a5b3d4323532af"
                title="add Shabbos Safe Warming Tray to cart"
              >
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
            <header>
              <h1 title="Go Wash">Go Wash</h1>
            </header>
            <img
              src={goWash}
              alt="The Go Wash, a portable washing cup"
              title="Go Wash"
            ></img>
          </div>
          <div className="content">
            <div className="flex-box-products-page">
              <a
                href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=76d33ab9cfbe438fa25c8876e344c439"
                title="add Go Wash to cart"
              >
                Add To Cart
              </a>
              <GoWashModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 title="KosherClock">KosherClock</h1>
            </header>
            <img
              src={kosherClock}
              alt="The KosherClock, a portable clock that functions well on shabbos on yom tov"
              title="KosherClock"
              id="kosher-clock"
            ></img>
          </div>
          <div className="content">
            <div className="flex-box-products-page">
              <a
                href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4bb9fb8c67954716bc68708634c6c8ae"
                title="add KosherClock to cart"
              >
                Add To Cart
              </a>
              <KosherClockModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 title="Fridg-eez">Fridg-eez</h1>
            </header>
            <img
              src={fridgeez}
              alt="Fridg-eez, a handy tool that allows you to keep your fridge light off on shabbos and yom tov"
              title="Fridg-eez"
            ></img>
          </div>
          <div className="content">
            <div className="flex-box-products-page">
              <a
                href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=6cbbe188b0a54a2ebff575e09afc25ac"
                title="add Fridg-eez to cart"
              >
                Add To Cart
              </a>
              <FridgeezModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 title="Shabbos Bottle Opener">Shabbos Bottle Opener </h1>
            </header>
            <img
              src={bottleOpener}
              alt="The Shabbos Bottle Opener, a tool that allows yout to open bottles open shabbos in accordance with Halacha"
              title="Shabbos Bottle Opener"
            ></img>
          </div>
          <div className="content">
            <div className="flex-box-products-page">
              <a
                href="https://www.kosherimage.com/cmd.php?pid=a9f059a9b16d4f12a9f10f188911df3b"
                title="add Shabbos Bottle Opener to cart"
              >
                Add To Cart
              </a>
              <OpenerModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 className="Mushroom KosherLamp" title="Mushroom KosherLamp">
                Mushroom KosherLamp
              </h1>
            </header>
            <img
              src={shroomImg}
              alt="The Mushroom KosherLamp, a kid friendly version of the popular KosherLamp"
              title="Mushroom KosherLamp"
            ></img>
          </div>
          <div className="content">
            <div className="flex-box-products-page">
              <a
                className="shroom-cart"
                href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=515cfa6e0de346488d2891efe33e0200"
                title="add Mushroom KosherLamp to cart"
              >
                Add To Cart
              </a>
              <ShroomModal />
            </div>
          </div>
        </div>
        <TissueCard />
        <DecalCard />
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 title="Shabbos Toothbrush">Shabbos Toothbrush</h1>
            </header>
            <img
              src={shabTooth}
              alt="The Shabbos Toothbrush, a 4 pack of Shabbos Toothbrushes which allows you to brush your teeth on Shabbos and Yom Tov in accordance with Halacha"
              title="Shabbos Toothbrush"
            ></img>
          </div>
          <div className="content">
            <h3>1 x 4 Pack</h3>
            <div className="flex-box">
              <a
                href="https://www.kosherimage.com/cmd.php?pid=d73562f0b42637d3268b40b7e85e7f33"
                title="add Shabbos Toothbrush to cart"
              >
                Add To Cart
              </a>
              <ShabToothModal />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <header>
              <h1 title="Uncle Moishy Weekday Toothbrush">
                Uncle Moishy Weekday Toothbrush
              </h1>
            </header>
            <img
              src={weekTooth}
              alt="The (Weekday) Uncle Moishy Toothbrush, a 4 pack of weekday toothbrushes which are a great way to get the kids to practice oral hygeiene"
              title="Uncle Moishy Weekday Toothbrush"
            ></img>
          </div>
          <div className="content">
            <h3>1 x 4 Pack</h3>
            <div className="flex-box">
              <a
                href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=db93a1eee8ae4979b5a3112c3ef94f28"
                title="add Uncle Moishy Weekday Toothbrush to cart"
              >
                Add To Cart
              </a>
              <WeekToothModal />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Products;
