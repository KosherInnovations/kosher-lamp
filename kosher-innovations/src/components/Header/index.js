import React, { useState, useEffect } from "react";
import { gsap, TimelineMax, Power3 } from "gsap";
import logoLarge from '../../resources/kosher_innovations_logo.png';
import logoSmall from "../../resources/ki-logo-no-background.png";
gsap.registerPlugin(TimelineMax);

const Header = (props) => {

  useEffect(() => {
    let tl = new TimelineMax();
    const mediaQuery1 = window.matchMedia("(min-width: 900px)");
    if (mediaQuery1.matches) {
      tl.to(".navbar", 2,
      {opacity: 1, ease: Power3, delay: .5}
      )
      tl.to(".navigation-logo", { x: "0", opacity: 1, ease: Power3 })
      tl.to(".navbar ul", { x: "0", opacity: 1, ease: Power3 }, "<0" )
      tl.to(".nav-link", .5, { opacity: 1, stagger: .3 }, "<.1");
    }
    
  }, [])

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
