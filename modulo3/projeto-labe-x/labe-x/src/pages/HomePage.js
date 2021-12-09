import {Body, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"

function HomePage () {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  }

  const goToListTripPage = () => {
    history.push("/trips/list");
  }

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
        <div>        
        <button onClick={goToListTripPage }>Viagens</button>
        <button onClick={goToLoginPage}>Login</button>
        </div>
      </Header>
      
      <Body>
        <h2>Home Page:</h2>
        <p> Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>

      </Body>
      </div>
    )
  }
export default HomePage
  