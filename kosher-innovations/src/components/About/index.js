import React from "react";
import kiLogo from "../../resources/ki-banner-detailed.jpg";

const About = () => {
  return (
    <section id="about">
      <header>
        <h1 title="About Kosher Innovations">
          <img src={kiLogo} alt="Kosher Innovations logo black"></img>
        </h1>
        <p>
          Our goal is to invent and market creative products that benefit the
          Shomer Shabbat community. We are constantly exploring ideas for Jewish
          products that are practical, innovative and halachically permissible.
        </p>
      </header>
      <div className="our-team">
        
      </div>
    </section>
  );
};

export default About;
