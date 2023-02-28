import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const GoWash = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>GoWash</div>;
};

export default GoWash;
