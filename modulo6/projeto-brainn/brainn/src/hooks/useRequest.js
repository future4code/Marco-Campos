import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url";
import GlobalContext from "../global/GlobalContext";

const useRequests = () => {
  const { lottery, setLottery, numbers, setNumbers } =
    useContext(GlobalContext);

  const [contest, setContest] = useState([]);

  const getLottery = () => {
    const url = "/loterias";

    axios
      .get(BASE_URL + url)
      .then((res) => {
        setLottery(res.data);
        console.log("loteria", res.data);
      })

      .catch((res) => {
        console.log(res);
      });
  };

  const getLotteryContest = () => {
    const url = "/loterias-concursos";

    axios
      .get(BASE_URL + url)
      .then((res) => {
        setContest(res.data);
        console.log("contest", res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    getLotteryContest();
    getLottery();
  }, []);

  // const getContest = (id) => {
  //     const url = `/concursos/${id}`

  //     axios.get(BASE_URL+url)
  //     .then((res)=>{
  //         setContest({
  //             ...contest,
  //             date: res.data.data
  //         })
  //         setNumbers(res.data.numeros)
  //     })
  //     .catch((res)=>{
  //         console.log(res)
  //     })
  // }

  // useEffect(()=>{
  //     getContest(contest.id)
  // },[lottery])

  return [contest, setContest];
};
export default useRequests;
