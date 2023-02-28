import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const Decal = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>Decal</div>;
};

export default Decal;
