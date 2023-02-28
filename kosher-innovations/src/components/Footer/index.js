import React from "react";
// import backgroundImg from "../../resources/dark-pattern-bg.webp";
import scrollToTop from "../../helpers/scrollToTop";

const Footer = (props) => {
  const { pages = [], setCurrentPage } = props;

  const btnArray = [
    {
      btnText: "Home",
      page: 0,
    },
    {
      btnText: "Products",
      page: 1,
    },
    {
      btnText: "Replacements",
      page: 2,
    },
    {
      btnText: "About",
      page: 3,
    },
    {
      btnText: "Contact",
      page: 4,
    },
    {
      btnText: "Travel KosherLamp",
      page: 5,
    },
    {
      btnText: "KosherLamp MAX",
      page: 6,
    },
    {
      btnText: "Bug Checker",
      page: 7,
    },
    {
      btnText: "Shabbos Safe Warming Tray",
      page: 8,
    },
    {
      btnText: "Shabbos Scrub Gloves",
      page: 9,
    },
    {
      btnText: "Smart Shissel",
      page: 10,
    },
    {
      btnText: "Go Wash",
      page: 11,
    },
    {
      btnText: "KosherClock",
      page: 12,
    },
    {
      btnText: "Fridg-eez",
      page: 13,
    },
    {
      btnText: "Shabbos Bottle Opener",
      page: 14,
    },
    {
      btnText: "Mushroom KosherLamp",
      page: 15,
    },
    {
      btnText: "Shabbos Bathroom Tissue",
      page: 16,
    },
    {
      btnText: "Jewish Wall Decals",
      page: 17,
    },
    {
      btnText: "Shabbos Toothbrush",
      page: 18,
    },
    {
      btnText: "Uncle Moishy Weekday Toothbrush",
      page: 19,
    },
  ];

  const FooterBtns = () => {
    return btnArray.map((btn) => {
      return (
        <button
          key={btn.page}
          className="footer-btn"
          onClick={() => {
            setCurrentPage(pages[btn.page]);
            scrollToTop();
          }}
        >
          {btn.btnText}
        </button>
      );
    });
  };

  return (
    <footer>
        {/* <img className="bg-img" src={backgroundImg} alt="background"></img> */}
      <FooterBtns />
    </footer>
  );
};

export default Footer;
