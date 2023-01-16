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
};

const debounce = (func, wait) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

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
        {team.map((teamMember, i) => (
          <div className="card" key={i}>
            <div className="imgBox">
              <header>
                <h1 className="team-member-name" title={`${teamMember.name}`}>
                  {teamMember.name}
                </h1>
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
        <h4>Who We Are</h4>
        <p className="info-box">
          We are a small Jewish company based out of Toronto. (Yes, our office
          is in Canada!) Our name explains our mission: Our goal is to invent
          and market creative products that benefit the Shomer Shabbat
          community.<br></br>
          <br></br>We are constantly exploring ideas for Jewish products that
          are practical, innovative and halachically permissible. We make sure
          that all of our products are approved by leading poskim (Rabbinical
          Authorities who specialize in specific Torah laws).<br></br>
          <br></br>That way, you can be assured that any Kosher Innovations
          product meets all halachically applicable requirements such as for
          keeping Shabbat or Kashrut.<br></br>
          <br></br>Although we are best known as the creators of the KosherLamp,
          we have produced other popular items such as the Bug Checker Portable
          Light Board, the KosherClock, the Shabbos Toothbrush and the Shabbos
          Toothwash. And we won't stop there. We are always working on new and
          exciting ideas. Check back from time to time to see what's new!
        </p>
        <h4>How We Started</h4>
        <p className="info-box">
          It all started when Rebbitzen Chana who is an avid reader, asked her
          husband Reb Shmuel if there was a way to hook up some kind of bedside
          light so she could read in the bedroom on Shabbos.<br></br>
          <br></br>After looking through the seforim, it appeared that even
          though many poskim held that the actual “lamp” should only be moved
          with a shinui, a lamp could be made with a moveable shade that could
          totally darken the lamp. As Hashgacha (Providence) would have it, one
          of Reb Shmuel’s congregants, Moshe Orzech z"l, was in the lighting
          business. Reb Shmuel and Moshe began to create a prototype for this
          new type of lamp. After much experimentation, and testing, they were
          ready to start production of this new innovation, the KosherLamp.
          <br></br>
          <br></br>On his many trips visiting factories overseas, Moshe was able
          to select a place to manufacture and refine the KosherLamps until it
          was just right. Letters were soon filed by a patent attorney, a
          website was set up and poskim were consulted. The initial model of
          KOSHERLAMP™ was an instant success. Stores in Canada and the United
          States started to carry it and then interest spread to Israel, Europe,
          South Africa, Australia and South America.
        </p>
        <h4>What We Do Now</h4>
        <p className="info-box">
          After the success of the KosherLamp™, Kosher Innovations is still
          working on producing practical and innovative new products to enhance
          the Jewish home. All it takes is a few thoughts like "What if" and
          "Wouldn't it be great if..." to get something started.<br></br>
          <br></br>Who knows what Kosher Innovations will come up with next?
          Check your local Judaica store, Kosher grocer, hardware, pharmacy or
          other Jewish stores for new Kosher Innovations products.<br></br>
          <br></br>
          Or check out our{" "}
          <a className="map-link" href="https://www.google.com/maps/d/viewer?mid=15-DxkcwmeXGIyUiBxfB2ibOJbtQ&hl=en&ll=-3.81666561775622e-14%2C-90.006665&z=1">
            map
          </a>{" "}
          to find a retailer near you
        </p>
      </div>
    </section>
  );
};

export default About;
