import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const ScrubGloves = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>Scrub Gloves</div>;
};

export default ScrubGloves;
