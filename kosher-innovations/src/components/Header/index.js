import React, { useState, useEffect } from "react";
import logoLarge from '../../resources/kosher_innovations_logo.png';
import logoSmall from "../../resources/ki-logo-no-background.png";

const Header = (props) => {

  const [sizedLogo, setSizedLogo] = useState(null);

  const getLogo = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setSizedLogo(logoLarge);
    } else {
      setSizedLogo(logoSmall);
    }
  }

  useEffect(() => {
    getLogo();
    window.addEventListener("resize", getLogo);
    return () => {
      window.removeEventListener("resize", getLogo);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <nav>
          <a href="https://kosherinnovations.github.io/kosher-lamp/" title="Back to homepage">
            <img
              src={sizedLogo}
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
