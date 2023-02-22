import React, { useEffect } from "react";
import changeLettersLight from "../../helpers/changeLettersLight";
import MapContainer from "../MapContainer";
import EmailForm from "../EmailForm";

const Contact = () => {
  useEffect(() => {
    changeLettersLight();
  }, []);

  return (
    <section id="contact">
      <MapContainer />
      <EmailForm />
    </section>
  );
};

export default Contact;
