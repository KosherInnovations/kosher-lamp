import React, { useState, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import "./index.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import upArrow from "./resources/up-arrow.webp";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    const mediaQuery1 = window.matchMedia("(min-width: 900px)");
    const mediaQuery2 = window.matchMedia("(min-width: 768px)");
    if (mediaQuery1.matches) {
      gsap.set("nav .navigation-logo", { transform: "scale(0)" });
      gsap.set(".nav-link", { transform: "scale(0)" });
      gsap.set(".shipping-header", { opacity: "0" });
      gsap.set(".card", { scale: 0, translateY: "100vw" });

      tl.to("nav .navigation-logo", {
        duration: 1,
        transform: "scale(1)",
      });
      tl.to(".nav-link", {
        transform: "scale(1)",
        stagger: { amount: 0.5 },
        duration: 0.5,
        delay: 0.5,
        onComplete: function switchTransition() {
          const navLinks = document.querySelectorAll(".nav-link");
          navLinks.forEach((link) => {
            link.classList.add("transition");
          });
        },
      });
      tl.to(".shipping-header", { delay: 0.5, opacity: "1" });
      tl.to(".card", { duration: 2.5, scale: 1, translateY: 0, ease: Power3 });
    }
    if (mediaQuery2.matches) {
    }
  });

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
        <Page currentPage={currentPage}></Page>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
