import React, { useState } from "react";
import shoppingCart from "../../resources/shopping-cart.webp";
import menuBar from "../../resources/list.webp";
import scrollToTop from "../../helpers/scrollToTop";

const hideUpArrow = () => {
  const upArrow = document.querySelector(".up-arrow");
  upArrow.style.display = "none";
};

const showUpArrow = () => {
  const upArrow = document.querySelector(".up-arrow");;
  if (window.matchMedia("(min-width: 500px)").matches) {
    upArrow.style.display = "initial";
  } else {
    upArrow.style.display = "none";
  }
};

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;
  const [active, setActive] = useState("nav-menu");
  const [original, turned] = useState("menu-btn");

  const navToggler = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
    original === "menu-btn"
      ? turned("menu-btn turned-btn")
      : turned("menu-btn");
  };

  return (
    <>
      <ul className={active}>
        <li
          className="nav-link"
          onClick={() => {
            showUpArrow();
            setActive("nav-menu");
            turned("menu-btn");
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[0]);
            }, 1000);
          }}
          title="Shop Our Products"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Home
        </li>
        <li
          className="nav-link"
          id="nav1"
          onClick={() => {
            showUpArrow();
            setActive("nav-menu");
            turned("menu-btn");
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[1]);
            }, 1000);
          }}
          title="Shop Our Products"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Products
        </li>
        <li
          className="nav-link"
          id="nav2"
          onClick={() => {
            showUpArrow();
            setActive("nav-menu");
            turned("menu-btn");
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[2]);
            }, 1000);
          }}
          title="Shop Our Replacements"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Replacements
        </li>
        <li
          className="nav-link"
          onClick={() => {
            showUpArrow();
            setActive("nav-menu");
            turned("menu-btn");
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[3]);
            }, 1000);
          }}
          title="Learn More About Our Company"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          About
        </li>
        <li
          className="nav-link"
          onClick={() => {
            hideUpArrow();
            setActive("nav-menu");
            turned("menu-btn");
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[4]);
            }, 1000);
          }}
          title="Get in Touch with Us"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Contact
        </li>
        <li title="Your Shopping Cart">
          <a
            href="https://www.1shoppingcart.com/app/netcart.asp?MerchantID=49604"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={shoppingCart}
              className="shopping-cart"
              alt="go to your shopping cart"
              rel="prefetch nofollow noopener noreferrer"
              tabIndex="0"
            />
          </a>
        </li>
      </ul>
      <div onClick={navToggler} className="toggler">
        <img
          rel="prefetch"
          src={menuBar}
          alt="open menu"
          className={original}
        ></img>
      </div>
    </>
  );
};

export default Navbar;
