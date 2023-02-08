import React, { useState, useEffect} from "react";
import logoLarge from "../../resources/kosher_innovations_logo.webp";
import logoSmall from "../../resources/ki-logo-no-background.webp";
const mediaQuery2 = window.matchMedia("(min-width: 768px)");

const Header = (props) => {
 

  const [sizedLogo, setSizedLogo] = useState(null);

  const getLogo = () => {
    if (mediaQuery2.matches) {
      setSizedLogo(logoLarge);
    } else {
      setSizedLogo(logoSmall);
    }
  };

  useEffect(() => {
    getLogo();
    window.addEventListener("resize", getLogo);
    return () => {
      window.removeEventListener("resize", getLogo);
    };
  }, []);

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
