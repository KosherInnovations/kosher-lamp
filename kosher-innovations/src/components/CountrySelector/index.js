import React from "react";

const CountrySelector = () => {
  const optionsArray = [
    {
      optionText: "USA",
      val: "US",
    },
    {
      optionText: "Canada",
      val: "CA",
    },
    {
      optionText: "Israel",
      val: "IL",
    },
    {
      optionText: "United Kingdom",
      val: "GB",
    },
    {
      optionText: "Australia",
      val: "AU",
    },
    {
      optionText: "Argentina",
      val: "AR",
    },
    {
      optionText: "Austria",
      val: "AT",
    },
    {
      optionText: "Belgium",
      val: "BE",
    },
    {
      optionText: "Brazil",
      val: "BR",
    },
    {
      optionText: "Chile",
      val: "CL",
    },
    {
      optionText: "France",
      val: "FR",
    },
    {
      optionText: "Germany",
      val: "DE",
    },
    {
      optionText: "Gibraltar",
      val: "GI",
    },
    {
      optionText: "Hong Kong",
      val: "HK",
    },
    {
      optionText: "Ireland",
      val: "IE",
    },
    {
      optionText: "Italy",
      val: "IT",
    },
    {
      optionText: "Mexico",
      val: "MX",
    },
    {
      optionText: "Netherlands",
      val: "NL",
    },
    {
      optionText: "New Zealand",
      val: "NZ",
    },
    {
      optionText: "Panama",
      val: "PA",
    },
    {
      optionText: "Portugal",
      val: "PT",
    },
    {
      optionText: "Singapore",
      val: "SG",
    },
    {
      optionText: "Spain",
      val: "ES",
    },
    {
      optionText: "Switzerland",
      val: "CH",
    },
    {
      optionText: "Other",
      val: "Other",
    },
  ];

  const Options = () => {
    return optionsArray.map((option) => {
      return (
        <option key={option.val} value={option.val} className="country-option">
          {option.optionText}
        </option>
      );
    });
  };

  return (
    <li className="inputBox-country">
      <span>*Country</span>
      <select name="Country">
        <Options />
      </select>{" "}
    </li>
  );
};

export default CountrySelector;
