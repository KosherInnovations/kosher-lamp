import React, { useEffect } from "react";
import changeLettersDark from "../../../helpers/changeLettersDark";

const BottleOpener = () => {
  useEffect(() => {
    changeLettersDark();
  }, []);
  return <div>BottleOpener</div>;
};

export default BottleOpener;
