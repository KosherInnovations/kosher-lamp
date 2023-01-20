import React from "react";
import emailjs from "emailjs-com";
const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_enpvni6", "contact_form", "form", "iwUP8eH1NlcSvoxkb")
      .then(
        (result) => {
          console.log(result.text);
          let inputs = document.querySelectorAll("input");
          inputs.forEach((input) => (input.value = ""));
  
          let contactHeader = document.getElementById("contact-header");
          contactHeader.style.fontSize = "35px";
          contactHeader.style.color = "green";
          contactHeader.textContent = "Message Sent ✔";
  
          let submitBtn = document.getElementById("submitBtn");
          submitBtn.style.backgroundColor = "green";
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        setTimeout(() => {
          let contactHeader = document.getElementById("contact-header");
          contactHeader.style.fontSize = "25px";
          contactHeader.style.color = "#000000";
          contactHeader.textContent = "Get In Touch";
  
          let submitBtn = document.getElementById("submitBtn");
          submitBtn.style.backgroundColor = "#1247b8";
        }, 5000);
      });
  };
  

  return (
    <section id="contact">
      <div className="map-container">
        <iframe
          title="Kosher Innovations product map"
          src="https://www.google.com/maps/d/embed?mid=15-DxkcwmeXGIyUiBxfB2ibOJbtQ&hl=en&ehbc=2E312F"
          // height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-form" onSubmit={sendEmail}>
        <h4 className="contact-header" id="contact-header">
          Get In Touch
        </h4>
        <form>
          <div className="inputBox">
            <input
              type="text"
              name="user_name"
              required="required"
              className="input1"
            />
            <span>Name:</span>
          </div>
          <div className="inputBox">
            <input type="email" name="user_email" required="required" />
            <span>Email address:</span>
          </div>
          <div className="inputBox inputBoxMessage">
            <input
              name="message"
              type="text"
              required="required"
              className="inputBoxMessageInput"
            />
            <span>Message:</span>
          </div>
          <div className="inputBoxBtnContainer">
            <button
              type="submit"
              className="inputBoxBtn"
              value="send"
              id="submitBtn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
