import * as React from "react";
import kiLogo from "../../resources/ki-banner-detailed.jpg";
import smilingMan from "../../resources/smiling-man.png";

// onscroll animation is added once the window is loaded in

const animateCardOnScroll = () => {
  const cardElements = document.querySelectorAll(".card");
  const viewportHeight = window.innerHeight;
  for (const card of cardElements) {
    const rect = card.getBoundingClientRect();
    const distanceFromBottom = viewportHeight - rect.top;
    if (distanceFromBottom > 0.25 * viewportHeight) {
      card.classList.add("animated");
      card.classList.remove("invisible");
    } else {
      card.classList.remove("animated");
      card.classList.add("invisible");
    }
  }
  window.addEventListener("scroll", animateCardOnScroll);
}

const debounce = (func, wait) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedAnimateCardOnScroll = debounce(animateCardOnScroll, 100);

window.onload = debouncedAnimateCardOnScroll;
window.addEventListener("scroll", debouncedAnimateCardOnScroll);

const About = () => {
  const team = [
    {
      picture: smilingMan,
      name: "Yaakov F.",
      position: "General Manager",
      blurb:
        "I love working and building new things for people. It truly makes life an amazing experience. I love working and building new things for people. It truly makes life an amazing experience. ",
    },
    {
      picture: smilingMan,
      name: "Debbi E.",
      position: "Salesperson",
      blurb:
        "I love working and building new things for people. It truly makes life an amazing experience. I love working and building new things for people. It truly makes life an amazing experience.",
    },
    {
      picture: smilingMan,
      name: "Meir G.",
      position: "Bookeeper",
      blurb:
        "I love working and building new things for people. It truly makes life an amazing experience. I love working and building new things for people. It truly makes life an amazing experience.",
    },
    {
      picture: smilingMan,
      name: "Moshe G.",
      position: "Software Developer, Graphics Designer, Bookeeper",
      blurb:
        "I love working and building new things for people. It truly makes life an amazing experience. I love working and building new things for people. It truly makes life an amazing experience.",
    },
  ];

  return (
    <section id="about">
      <header>
        <h1 title="About Kosher Innovations" className="about-ki">
          <img src={kiLogo} alt="Kosher Innovations logo black"></img>
        </h1>
        <p>
          Our goal is to invent and market creative products that benefit the
          Shomer Shabbat community. We are constantly exploring ideas for Jewish
          products that are practical, innovative and halachically permissible.
        </p>
      </header>
      <div className="our-team">
        {team.map((teamMember) => (
          <div className="card">
            <div className="imgBox">
              <header>
                <h1 className="team-member-name" title={`${teamMember.name}`}>{teamMember.name}</h1>
              </header>
              <img
                src={smilingMan}
                alt={`${teamMember.name}`}
                title={`${teamMember.name}`}
              ></img>
            </div>
            <h2 className="team-member-position">{teamMember.position}</h2>
            <div className="content">
              <div className="flex-box-products-page">
                <p>{teamMember.blurb}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ki-info">
        <p className="info-box"></p>
        <p className="info-box"></p>
        <p className="info-box"></p>
      </div>
    </section>
  );
};

export default About;
