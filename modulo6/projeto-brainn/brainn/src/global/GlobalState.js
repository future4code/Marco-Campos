import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
  const [lottery, setLottery] = useState({});
  const [contest, setContest] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const data = {
    lottery,
    setLottery,
    // contest,
    // setContest,
    numbers,
    setNumbers,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
