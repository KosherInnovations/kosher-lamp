import React from "react";
import logo from '../../resources/kosher_innovations_logo.png';

const Header = (props) => {
  return (
    <>
      <header className="navbar">
        <nav>
          <a href="/">
            <img
              src={logo}
              className="navigation-logo"
              alt="navigation logo"
            />
          </a>
          {props.children}
        </nav>
      </header>
    </>
  );
};

export default Header;
