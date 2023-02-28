import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const Fridgeez = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>Fridgeez</div>;
};

export default Fridgeez;
