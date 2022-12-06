import React from "react";
import downArrow from "../../resources/down-arrow.png";

const About = () => {
  return (
    <section id="about">
      <div id="about-us">
        <h1>
          <span>
            Kosher<br></br>Innovations
          </span>
          <br></br>The KosherLamp People
        </h1>
        <h3>Who We Are</h3>
        <img className="down-arrow" src={downArrow} alt="down arrow"></img>
      </div>
    </section>
  );
};

export default About;
