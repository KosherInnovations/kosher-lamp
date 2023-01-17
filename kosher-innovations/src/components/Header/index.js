import React from "react";
import logo from '../../resources/kosher_innovations_logo.png';

const Header = (props) => {
  return (
    <>
      <header className="navbar">
        <nav>
          <a href="https://kosherinnovations.github.io/kosher-lamp/" title="Back to homepage">
            <img
              src={logo}
              className="navigation-logo"
              alt="home button"
            />
          </a>
          {props.children}
        </nav>
      </header>
    </>
  );
};

export default Header;
