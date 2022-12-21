import React from "react";
// import kiLogo from "../../resources/ki_logo.png";
import downArrow from "../../resources/down-arrow.png";

const About = () => {
  return (
    <section id="about">
      {/* <img id="ki-logo" src={kiLogo} alt="kosher innovations logo"></img> */}
      <div id="about-us">
        <header>
          <h1>
            <span>
              Kosher<br></br>Innovations
            </span>
            <br></br>The KosherLamp People
          </h1>
        </header>
        <h3>Who We Are</h3>
        <img className="down-arrow" src={downArrow} alt="down arrow"></img>
      </div>
    </section>
  );
};

export default About;
