import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_yzucm0t",
//         "contact_form",
//         form.current,
//         "iwUP8eH1NlcSvoxkb"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           let inputs = document.querySelectorAll("input");
//           inputs.forEach((input) => (input.value = ""));

//           let contactHeader = document.getElementById("contact-header");
//           contactHeader.style.fontSize = "35px";
//           contactHeader.style.color = "green";
//           contactHeader.textContent = "Message Sent ✔";

//           let submitBtn = document.getElementById("submitBtn");
//           submitBtn.style.backgroundColor = "green";

//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
  };

  return (
    <section id="contact">
      <div className="shipping-policy">
        <h2>Shipping Policy</h2>
        <p>100 day shipping guarantee</p>
      </div>
      <div className="contact-form">
        <h4 className="contact-header" id="contact-header">
          Contact me
        </h4>
        <form ref={form} onSubmit={sendEmail}>
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
            <input name="message" type="text" required="required" className="inputBoxMessageInput"/>
            <span>Message:</span>
          </div>
          <div className="inputBoxBtnContainer">
            <button type="submit" className="inputBoxBtn" value="send" id="submitBtn" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;