import React, { useState } from "react";
import ReactDOM from "react-dom";
import CountrySelector from "../CountrySelector";

const EmailForm = () => {
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
      <InputBoxList inputBoxes={inputBoxes} />
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
