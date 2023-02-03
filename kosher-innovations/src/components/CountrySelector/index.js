import React from "react";

const CountrySelector = () => {
    return (
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
    )
}

export default CountrySelector;