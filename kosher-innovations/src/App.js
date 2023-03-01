import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import scrollToTop from "./helpers/scrollToTop";

function App() {
  const [pages] = useState([
    { name: "Home" },
    { name: "Products" },
    { name: "Replacements" },
    { name: "About" },
    { name: "Contact" },
    { name: "Travel KosherLamp" },
    { name: "KosherLamp MAX" },
    { name: "Bug Checker" },
    { name: "SafePlate" },
    { name: "Shabbos Scrub Gloves" },
    { name: "Smart Shissel" },
    { name: "Go Wash" },
    { name: "KosherClock" },
    { name: "Fridg-eez" },
    { name: "Shabbos Bottle Opener" },
    { name: "Mushroom KosherLamp" },
    { name: "Shabbos Bathroom Tissue" },
    { name: "Jewish Wall Decals" },
    { name: "Shabbos Toothbrush" },
    { name: "Uncle Moishy Weekday Toothbrush" },
  ]);

  // sets the current page to 0 and can be dynamically updated based on the buttons that are clicked inside the components
  const [currentPage, setCurrentPage] = useState(pages[0]);

  // App will return all the components and pass down the necesarry functionality to its children
  return (
    <>
      <button
        onClick={() => scrollToTop()}
        title="Back to top"
        className="up-arrow"
      >
        ↑
      </button>
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <Page
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Page>
      </main>
      <Footer pages={pages} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
