import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import upArrow from "./resources/up-arrow.png";
import Navbar from "./components/Navbar";
import Page from "./components/Page";




function App() {

  const [pages] = useState([
    { name: "Products" },
    { name: "Replacements" },
    { name: "About" },
    { name: "Contact" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

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

  return (
    <>
      <div id="top"></div>
      <a href="#top" title="Back to top">
        <img className="up-arrow" src={upArrow} alt="back to top"></img>
      </a>
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
