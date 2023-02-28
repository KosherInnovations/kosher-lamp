import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const ShabTooth = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>ShabTooth</div>;
};

export default ShabTooth;
