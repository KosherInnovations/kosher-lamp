import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import upArrow from "./resources/up-arrow.webp";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  // logic to set the page to the first one
  const [pages] = useState([
    { name: "Products" },
    { name: "Replacements" },
    { name: "About" },
    { name: "Contact" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // gsap animation logic
  window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    const mediaQuery1 = window.matchMedia("(min-width: 900px)");
    const mediaQuery2 = window.matchMedia("(min-width: 768px)");

    if (mediaQuery1.matches) {
      gsap.registerPlugin(ScrollTrigger);

      // const cards = document.querySelectorAll(".card");
      // gsap.set(cards, { autoAlpha: 0 });
      tl.fromTo(
        "nav .navigation-logo",
        {
          transform: "scale(0)",
        },
        { duration: 2, transform: "scale(1)" }
      );
      tl.fromTo(
        ".nav-link",
        { transform: "scale(0)" },
        {
          transform: "scale(1)",
          stagger: { amount: 0.5 },
          duration: 0.5,
          onComplete: function switchLinkTransition() {
            const navLinks = document.querySelectorAll(".nav-link");
            navLinks.forEach((link) => {
              link.classList.add("transition");
            });
          },
        }
      );
      tl.fromTo(
        ".shipping-header",
        { opacity: "0" },
        { delay: 0.5, opacity: "1" }
      );
      // ScrollTrigger.batch(cards, {
      //   interval: 0.5,
      //   batchMax: 1,
      //   onEnter: (batch) => {
      //     tl.fromTo(
      //       batch,
      //       1,
      //       { translateX: "100vw", transform: "scale(0)" },
      //       {
      //         translateX: 0,
      //         transform: "scale(1)",
      //         autoAlpha: 1,
      //         ease: Power3,
      //       },
      //       0.2
      //     );
      //   },
      // });
    }
    if (mediaQuery2.matches) {
    }
  });

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
