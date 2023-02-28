import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const WeekTooth = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>WeekTooth</div>;
};

export default WeekTooth;
