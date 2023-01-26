import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import logoLarge from "../../resources/kosher_innovations_logo.png";
import logoSmall from "../../resources/ki-logo-no-background.png";
import LazyLoad from "react-lazyload";
const mediaQuery1 = window.matchMedia("(min-width: 900px)");
const mediaQuery2 = window.matchMedia("(min-width: 768px)");

const Header = (props) => {
  const logoRef = useRef();

  useEffect(() => {
    if (logoRef.current && mediaQuery1.matches) {
      gsap.to(logoRef.current, {
        transform: "translateX(0px)",
        duration: 1,
      });
    }
  }, []);

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
    <header className="navbar">
    <nav>
    <a  className="navigation-logo-container" href="https://kosherinnovations.github.io/kosher-lamp/" title="Back to homepage">
      <LazyLoad height={200} offset={100}>
        <img ref={logoRef} src={sizedLogo} className="navigation-logo" alt="home button" />
      </LazyLoad>
    </a>
    {props.children}
    </nav>
    </header>
    </>
    );
    };
    
    export default Header;
