import { Body, Header, Logo, TextoBody } from "../components/Styled";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

function HomePage() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToListTripPage = () => {
    history.push("/trips/list");
  };

  return (
    <div>
      <Header>
        <Logo>
          <img
            src="https://image.freepik.com/vetores-gratis/astronauta-trabalhando-no-laptop-e-escrevendo-a-ilustracao-dos-desenhos-animados-conceito-de-negocio-de-ciencia-isolado-estilo-flat-cartoon_138676-3447.jpg"
            alt="Logo Astronalta"
            width="80px"
          />
          <h1>LABE X</h1>
        </Logo>
        <div></div>
      </Header>

      <Body>
        <TextoBody>
          <h2>Seja Bem Vindx A </h2>
          <h1>LABE X</h1>
          <p>
            Se Você Quer Fazer Uma Viagem Interestelar Acabou De Achar O Seu
            Lugar!!!
          </p>
          <div>
            <Button variant="contained" onClick={goToListTripPage}>Viagens</Button>
            <Button variant="contained" onClick={goToLoginPage}>Login</Button>
          </div>
        </TextoBody>

        <img
          src="https://image.freepik.com/vetores-gratis/astronauta-bonito-flutuando-com-ilustracao-de-icone-de-vetor-de-balao-de-ovni-conceito-de-icone-de-tecnologia-de-ciencia-vetor-premium-isolado-estilo-flat-cartoon_138676-3839.jpg"
          alt=""
        />
      </Body>
    </div>
  );
}
export default HomePage;
