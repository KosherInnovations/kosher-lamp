import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const SmartShissel = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>SmartShissel</div>;
};

export default SmartShissel;
