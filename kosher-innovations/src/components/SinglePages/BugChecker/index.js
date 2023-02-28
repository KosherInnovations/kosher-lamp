import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const BugChecker = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>BCKR</div>;
};

export default BugChecker;
