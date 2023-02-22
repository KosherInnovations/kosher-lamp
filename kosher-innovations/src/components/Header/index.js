import React from "react";
// import logoLarge from "../../resources/kosher_innovations_logo.png";
import logoSmall from "../../resources/ki-logo-no-background.webp";

const Header = (props) => {
  return (
    <>
      <header className="navbar" rel="preload">
        <nav>
          <a
            className="navigation-logo-container"
            href="https://kosherinnovations.github.io/kosher-lamp/"
            title="Back to homepage"
          >
            <img
              rel="prefetch"
              src={logoSmall}
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
