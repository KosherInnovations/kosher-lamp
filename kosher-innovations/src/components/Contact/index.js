import React, { useEffect } from "react";
import backgroundImg from "../../resources/dark-pattern-bg.webp";
import changeLettersLight from "../../helpers/changeLettersLight";
import MapContainer from "../MapContainer";
import EmailForm from "../EmailForm";

const Contact = () => {
  useEffect(() => {
    changeLettersLight();
  }, []);

  return (
    <section id="contact">
      <img className="bg-img" src={backgroundImg} alt="background"></img>
      <MapContainer />
      <EmailForm />
    </section>
  );
};

export default Contact;
