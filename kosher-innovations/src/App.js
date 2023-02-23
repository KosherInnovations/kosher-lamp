import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import upArrow from "./resources/up-arrow.webp";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  // logic to set the page to the first one
  const [pages] = useState([
    { name: "Home" },
    { name: "Products" },
    { name: "Replacements" },
    { name: "About" },
    { name: "Contact" },
    { name: "Travel KosherLamp" },
    { name: "KosherLamp MAX" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // logic to make the .shipping-header disappear when the cards are hovered over
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const shippingHeader = document.querySelector(".shipping-header");

    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        shippingHeader.style.opacity = "0";
      });
      card.addEventListener("mouseout", () => {
        shippingHeader.style.opacity = "1";
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseover", () => {
          shippingHeader.style.opacity = "0";
        });
        card.removeEventListener("mouseout", () => {
          shippingHeader.style.opacity = "1";
        });
      });
    };
  }, [currentPage]);

  // App will return all the components and pass down the necesarry functionality to its children
  return (
    <>
      <div id="top"></div>
      <a href="#top" title="Back to top">
        <img
          rel="prefetch"
          className="up-arrow"
          src={upArrow}
          alt="back to top"
        ></img>
      </a>
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
      {/* <Footer /> */}
    </>
  );
}

export default App;
