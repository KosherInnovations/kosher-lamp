import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const ShroomLamp = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>ShroomLamp</div>;
};

export default ShroomLamp;
