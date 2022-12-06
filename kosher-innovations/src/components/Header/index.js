import React from "react";
import logo from '../../resources/kosher_innovations_logo.png';
import shoppingCart from '../../resources/shopping-cart.png';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <a href="index.html">
            <img
              src={logo}
              className="navigation-logo"
              alt="navigation logo"
            />
          </a>
          <ul>
            <li>
              <a href="products.html" className="nav-link">
                Products
              </a>
            </li>
            <li>
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="https://www.1shoppingcart.com/app/netcart.asp?MerchantID=49604">
                <img src={shoppingCart} className="shopping-cart" alt="shopping cart"/>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
