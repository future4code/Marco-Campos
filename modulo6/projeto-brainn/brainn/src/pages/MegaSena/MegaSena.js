import {
  Ellipse,
  FooterText,
  NumberContainer,
  RightContainer,
  ScreenContainer,
  Sidebar,
  LogoContainer,
  SelectContainer,
  SelectDiv,
} from "./Styled";
import React, { useContext, useEffect, useState } from "react";
// import Select from "../../components/Select/Select"
import GlobalContext from "../../global/GlobalContext";
import useRequests from "../../hooks/useRequest";
import axios from "axios";
import { BASE_URL } from "../../constants/Url";
import logo from "../../assets/img/logo.png";
import { goToQuina } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const MegaSena = () => {
  const history = useHistory();
  const { lottery, setLottery, numbers, setNumbers } =
    useContext(GlobalContext);

  const [number, setNumber] = useState([]);

  const { contest, setContest } = useRequests();
  const [contestDetail, setContestDetail] = useState([]);

  useEffect(() => {
    getContest(2359);
  }, []);

  const getContest = (id) => {
    const url = `/concursos/${id}`;

    axios
      .get(BASE_URL + url)
      .then((res) => {
        setContestDetail(res.data);
        setNumber(res.data.numeros);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const [screen, setScreen] = useState("/");

  const goToPage = (history) => {
    history.push(`${screen}`);
  };

  const inputController = (e) => {
    setScreen(e.target.value);
  };

  const numberMap = number.map((num) => {
    return (
      <Ellipse key={num}>
        {num[0]}
        {num[1]}
      </Ellipse>
    );
  });

  goToPage(history);

  return (
    <ScreenContainer>
      <Sidebar>
        <SelectDiv>
          <SelectContainer onChange={inputController} value={screen}>
            <option value={"/"}>MEGA-SENA</option>
            <option value={"/quina"}>QUINA</option>
            <option value={"/lotofacil"}>LOTOFACIL</option>
            <option value={"/lotomania"}>LOTOMANIA</option>
            <option value={"/timemania"}>TIMEMANIA</option>
            <option value={"/diadesorte"}>DIA DE SORTE</option>
          </SelectContainer>
        </SelectDiv>
        <LogoContainer>
          <img src={logo} alt="logo" />
          <h2>MEGA-SENA</h2>
        </LogoContainer>

        <div>
          <h4>consurso</h4>
          <p>2359 -</p>
        </div>
      </Sidebar>
      <RightContainer>
        <NumberContainer>{numberMap}</NumberContainer>
      </RightContainer>
      <FooterText>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </FooterText>
    </ScreenContainer>
  );
};
export default MegaSena;
