import React, { useState, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import logoLarge from "../../resources/kosher_innovations_logo.png";
import logoSmall from "../../resources/ki-logo-no-background.png";

const Header = (props) => {
  useEffect(() => {
    const tl = gsap.timeline();
    const mediaQuery1 = window.matchMedia("(min-width: 900px)");
    if (mediaQuery1.matches) {
      tl.to(".navbar", 2, { scale: 1, ease: Power3, delay: 0.5 });
      gsap.set(".navigation-logo", { transform: "scale(0)" });
      gsap.to(".navigation-logo", {
        transform: "scale(1)",
        duration: 1,
        timeline: tl,
      });
      gsap.set(".nav-link", { transform: "scale(0)" });
      gsap.to(".nav-link", {
        transform: "scale(1)",
        stagger: { amount: 0.5 },
        duration: 0.5,
        delay: 0.1,
        timeline: tl,
        onComplete: function switchTransition() {
          const navLinks = document.querySelectorAll(".nav-link");
          navLinks.forEach((link) => {
            link.classList.add("transition");
          });
        },
      });
    }
  }, []);

  const [sizedLogo, setSizedLogo] = useState(null);

  const getLogo = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
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
          <a
            href="https://kosherinnovations.github.io/kosher-lamp/"
            title="Back to homepage"
          >
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
