import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const Tissue = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>Tissue</div>;
};

export default Tissue;
