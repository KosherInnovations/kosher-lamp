import React from "react";
import PageContent from "../PageContent";
import Home from "../HomePage";
import Products from "../Products";
import Replacements from "../Replacements";
import About from "../About";
import Contact from "../Contact";
import Travel from "../SinglePages/Travel";
import Kmax from "../SinglePages/Kmax";
import BugChecker from "../SinglePages/BugChecker";
import ScrubGloves from "../SinglePages/ScrubGloves";
import SmartShissel from "../SinglePages/SmartShissel";
import SafePlate from "../SinglePages/SafePlate";
import KosherClock from "../SinglePages/KosherClock";
import GoWash from "../SinglePages/GoWash";
import Fridgeez from "../SinglePages/Fridgeez";
import BottleOpener from "../SinglePages/BottleOpener";
import ShroomLamp from "../SinglePages/ShroomLamp";
import Tissue from "../SinglePages/Tissue";
import Decal from "../SinglePages/Decal";
import ShabTooth from "../SinglePages/ShabTooth";
import WeekTooth from "../SinglePages/WeekTooth";

const Page = ({ currentPage, setCurrentPage, pages }) => {
  const renderPage = () => {
    if (currentPage.name === "Home") {
      document.title = "Home";
      return <Home pages={pages} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage.name === "Products") {
      document.title = "Products";
      return <Products pages={pages} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage.name === "Replacements") {
      document.title = "Replacements";
      return <Replacements />;
    }
    if (currentPage.name === "About") {
      document.title = "About";
      return <About pages={pages} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage.name === "Contact") {
      document.title = "Contact";
      return <Contact />;
    }
    if (currentPage.name === "Travel KosherLamp") {
      document.title = "Travel KosherLamp";
      return <Travel />;
    }
    if (currentPage.name === "KosherLamp MAX") {
      document.title = "KosherLamp MAX";
      return <Kmax />;
    }
    if (currentPage.name === "Bug Checker") {
      document.title = "Bug Checker";
      return <BugChecker />;
    }
    if (currentPage.name === "SafePlate") {
      document.title = "Shabbos Safe Warming Tray";
      return <SafePlate />;
    }
    if (currentPage.name === "Shabbos Scrub Gloves") {
      document.title = "Shabbos Scrub Gloves";
      return <ScrubGloves />;
    }
    if (currentPage.name === "Smart Shissel") {
      document.title = "Smart Shissel";
      return <SmartShissel />;
    }
    if (currentPage.name === "Go Wash") {
      document.title = "Go Wash";
      return <GoWash />;
    }
    if (currentPage.name === "KosherClock") {
      document.title = "KosherClock";
      return <KosherClock />;
    }
    if (currentPage.name === "Fridg-eez") {
      document.title = "Fridg-eez";
      return <Fridgeez />;
    }
    if (currentPage.name === "Shabbos Bottle Opener") {
      document.title = "Shabbos Bottle Opener";
      return <BottleOpener />;
    }
    if (currentPage.name === "Mushroom KosherLamp") {
      document.title = "Mushroom KosherLamp";
      return <ShroomLamp />;
    }
    if (currentPage.name === "Shabbos Bathroom Tissue") {
      document.title = "Shabbos Bathroom Tissue";
      return <Tissue />;
    }
    if (currentPage.name === "Jewish Wall Decals") {
      document.title = "Jewish Wall Decals";
      return <Decal />;
    }
    if (currentPage.name === "Shabbos Toothbrush") {
      document.title = "Shabbos Toothbrush";
      return <ShabTooth />;
    }
    if (currentPage.name === "Uncle Moishy Weekday Toothbrush") {
      document.title = "Uncle Moishy Weekday Toothbrush";
      return <WeekTooth />;
    }
  };

  return (
    <>
      <PageContent>{renderPage()}</PageContent>
    </>
  );
};

export default Page;
