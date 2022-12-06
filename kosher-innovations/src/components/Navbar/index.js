import React from "react";
import shoppingCart from "../../resources/shopping-cart.png";

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <ul>
      <li className="nav-link" onClick={() => setCurrentPage(pages[0])}>
        Products
      </li>
      <li className="nav-link" onClick={() => setCurrentPage(pages[1])}>
        About
      </li>
      <li className="nav-link" onClick={() => setCurrentPage(pages[2])}>
        Contact
      </li>
      <li>
        <a href="https://www.1shoppingcart.com/app/netcart.asp?MerchantID=49604">
          <img
            src={shoppingCart}
            className="shopping-cart"
            alt="shopping cart"
          />
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
