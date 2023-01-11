import React from "react";
import shoppingCart from "../../resources/shopping-cart.png";

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <ul>
      <li
        className="nav-link"
        onClick={() => setCurrentPage(pages[0])}
        title="Shop Our Products"
        rel="noopener noreferrer"
        tabIndex="0"
      >
        Products
      </li>
      <li
        className="nav-link"
        onClick={() => setCurrentPage(pages[1])}
        title="Shop Our Replacements"
        rel="noopener noreferrer"
        tabIndex="0"
      >
        Replacements
      </li>
      <li
        className="nav-link"
        onClick={() => setCurrentPage(pages[2])}
        title="Learn More About Our Company"
        rel="noopener noreferrer"
        tabIndex="0"
      >
        About
      </li>
      <li
        className="nav-link"
        onClick={() => setCurrentPage(pages[3])}
        title="Get in Touch with Us"
        rel="noopener noreferrer"
        tabIndex="0"
      >
        Contact
      </li>
      <li title="Your Shopping Cart">
        <a href="https://www.1shoppingcart.com/app/netcart.asp?MerchantID=49604">
          <img
            src={shoppingCart}
            className="shopping-cart"
            alt="go to your shopping cart"
            rel="nofollow noopener noreferrer"
            tabIndex="0"
          />
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
