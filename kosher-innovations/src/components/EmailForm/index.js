import React, { useState } from "react";
import ReactDOM from "react-dom";
import CountrySelector from "../CountrySelector";

// import emailjs from "emailjs-com";

const EmailForm = () => {
  // const sendEmail = (e) => {
  //   e.prevenliefault();
  //   emailjs
  //     .sendForm("service_enpvni6", "contact_form", "form", "iwUP8eH1NlcSvoxkb")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         let inputs = document.querySelectorAll("input");
  //         inputs.forEach((input) => (input.value = ""));

  //         let contactHeader = document.getElementById("contact-header");
  //         contactHeader.style.fontSize = "35px";
  //         contactHeader.style.color = "green";
  //         contactHeader.textContent = "Message Sent ✔";

  //         let submitBtn = document.getElementById("submitBtn");
  //         submitBtn.style.backgroundColor = "green";
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     )
  //     .then(() => {
  //       setTimeout(() => {
  //         let contactHeader = document.getElementById("contact-header");
  //         contactHeader.style.fontSize = "25px";
  //         contactHeader.style.color = "#000000";
  //         contactHeader.textContent = "Get In Touch";

  //         let submitBtn = document.getElementById("submitBtn");
  //         submitBtn.style.backgroundColor = "#1247b8";
  //       }, 5000);
  //     });
  // };

  // return (
  //   <div className="contact-form" onSubmit={sendEmail}>
  //     <h4 className="contact-header" id="contact-header">
  //       Get In Touch
  //     </h4>
  //     <form>
  //       <div className="inputBox">
  //         <input
  //           type="text"
  //           name="user_name"
  //           required="required"
  //           className="input1"
  //         />
  //         <span>Name:</span>
  //       </div>
  //       <div className="inputBox">
  //         <input type="email" name="user_email" required="required" />
  //         <span>Email address:</span>
  //       </div>
  //       <div className="inputBox inputBoxMessage">
  //         <input
  //           name="message"
  //           type="text"
  //           required="required"
  //           className="inputBoxMessageInput"
  //         />
  //         <span>Message:</span>
  //       </div>
  //       <div className="inputBoxBtnContainer">
  //         <button
  //           type="submit"
  //           className="inputBoxBtn"
  //           value="send"
  //           id="submitBtn"
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );

  const InputBox = ({ inputName, required = false, spanLabel = "" }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const inputBoxHeaderStyles = {
      transform: inputValue.length > 0 ? "scale(0)" : "scale(1)",
    };

    return (
      <li className="inputBox">
        <input
          name={inputName}
          required={required}
          onChange={handleInputChange}
        />
        <span style={inputBoxHeaderStyles}>
          {required ? "*" : ""}
          {spanLabel}:
        </span>
      </li>
    );
  };

  const InputBoxList = ({ inputBoxes }) => {
    return (
      <>
        <p>
          <input
            type="hidden"
            name="ARThankyouURL"
            value="www.kosherimage.com/thanks_comments.html"
          ></input>
          <input type="hidden" name="MerchantID" value="49604"></input>
          <input type="hidden" name="AllowMulti" value="1"></input>
          <input type="hidden" name="CopyARResponse" value="1"></input>
          <input
            type="hidden"
            name="VisibleFields"
            value="name,company,Address1,city,state,Email1, Email2,country,workphone,zip,,,,,"
          ></input>
          <input
            type="hidden"
            name="RequiredFields"
            value="namecity, Email1"
          ></input>
          <input
            type="hidden"
            name="Home"
            value="www.kosher-innovations.com"
          ></input>
          <input type="hidden" name="AfID" value="0"></input>
          <input type="hidden" name="AdID" value="139512"></input>
          <input type="hidden" name="clientip" value="65.95.151.22"></input>
        </p>
        <ul>
          {inputBoxes.map((inputBox) => (
            <InputBox
              key={inputBox.inputName}
              {...inputBox}
              spanLabel={inputBox.spanLabel}
            />
          ))}
          <CountrySelector />
        </ul>
      </>
    );
  };

  const inputBoxes = [
    {
      inputName: "name",
      required: true,
      spanLabel: "Name",
    },
    {
      inputName: "Company",
      required: false,
      spanLabel: "Company",
    },
    {
      inputName: "Email1",
      required: true,
      spanLabel: "Email",
    },
    {
      inputName: "Email2",
      required: true,
      spanLabel: "Confirm Email",
    },
    {
      inputName: "WorkPhone",
      required: false,
      spanLabel: "Phone",
    },
    {
      inputName: "Address1",
      required: false,
      spanLabel: "Address",
    },
    {
      inputName: "City",
      required: true,
      spanLabel: "City/Town",
    },
    {
      inputName: "State",
      required: false,
      spanLabel: "State/Province",
    },
    {
      inputName: "zip",
      required: false,
      spanLabel: "Zip/Postal Code",
    },
  ];

  const CommentBox = () => {
    const [textareaValue, setTextareaValue] = useState("");

    const handleTextareaChange = (event) => {
      setTextareaValue(event.target.value);
    };

    const inputBoxHeaderStyles = {
      transform: textareaValue.length > 0 ? "scale(0)" : "scale(1)",
    };

    return (
      <li style={{ width: "100%" }} className="commentBox">
        <textarea
          cols="60"
          rows="5"
          wrap="virtual"
          name="Field10"
          onChange={handleTextareaChange}
        />
        <span id="inputBoxHeader" style={inputBoxHeaderStyles}>
          Comments:
        </span>
      </li>
    );
  };

  return (
    <form
      className="contact-form"
      action="https://www.mcssl.com/app/contactsave.asp"
      method="post"
      acceptCharset="UTF-8"
    >
      {/* <h4 className="contact-header" id="contact-header">
        Get In Touch
      </h4> */}
      {/* <ul>
        <li className="inputBox">
          <input name="name" required="required"></input>
          <span>*Name:</span>
        </li>
        <li className="inputBox">
          <input name="Company"></input>
          <span>Company:</span>
        </li>
        <li className="inputBox">
          <input name="Email1" required="required"></input>
          <span>*Email:</span>
        </li>
        <li className="inputBox">
          <input name="Email2" required="required"></input>
          <span>*Confirm Email:</span>
        </li>
        <li className="inputBox">
          <input name="WorkPhone"></input>
          <span>Phone:</span>
        </li>
        <li className="inputBox">
          <input name="Address1"></input>
          <span>Address:</span>
        </li>
        <li className="inputBox">
          <input name="City" required="required"></input>
          <span>*City/Town</span>
        </li>
        <li className="inputBox">
          <input name="State"></input>
          <span>*State/Province</span>
        </li>
        <li className="inputBox">
          <input name="zip"></input>
          <span>Zip/Postal Code</span>
        </li>
        <li className="inputBox-country">
          <span>*Country</span>
          <select name="Country">
            <option value="US" className="country-option">
              USA
            </option>
            <option value="CA" className="country-option">
              Canada
            </option>
            <option value="IL" className="country-option">
              Israel
            </option>
            <option value="GB" className="country-option">
              United Kingdom
            </option>
            <option value="AU" className="country-option">
              Australia
            </option>
            <option value="AR" className="country-option">
              Argentina
            </option>
            <option value="AT" className="country-option">
              Austria
            </option>
            <option value="BE" className="country-option">
              Belgium
            </option>
            <option value="BR" className="country-option">
              Brazil
            </option>
            <option value="CL" className="country-option">
              Chile
            </option>
            <option value="FR" className="country-option">
              France
            </option>
            <option value="DE" className="country-option">
              Germany
            </option>
            <option value="GI" className="country-option">
              Gibraltar
            </option>
            <option value="HK" className="country-option">
              Hong Kong
            </option>
            <option value="IE" className="country-option">
              Ireland
            </option>
            <option value="IT" className="country-option">
              Italy
            </option>
            <option value="MX" className="country-option">
              Mexico
            </option>
            <option value="NL" className="country-option">
              Netherlands
            </option>
            <option value="NZ" className="country-option">
              New Zealand
            </option>
            <option value="PA" className="country-option">
              Panama
            </option>
            <option value="PT" className="country-option">
              Portugal
            </option>
            <option value="SG" className="country-option">
              Singapore
            </option>
            <option value="ES" className="country-option">
              Spain
            </option>
            <option value="CH" className="country-option">
              Switzerland
            </option>
            <option value="Other" className="country-option">
              Other
            </option>
          </select>{" "}
        </li>
      </ul> */}
      <InputBoxList inputBoxes={inputBoxes} />
      <br></br>
      <ul align="center">
        <CommentBox />
        <input type="hidden" name="Custom" value="1"></input>
        <input type="hidden" name="Preview" value=""></input>
      </ul>

      <div className="inputBoxBtnContainer">
        <input
          className="inputBoxBtn"
          type="submit"
          name="submit"
          value="SUBMIT"
        ></input>
      </div>
    </form>
  );
};

ReactDOM.render(<EmailForm />, document.getElementById("root"));

export default EmailForm;
