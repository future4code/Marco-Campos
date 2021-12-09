import {Body, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"

function TripDetailsPage () {
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const goBack = () => {
    history.goBack()
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
          <button onClick={goToHomePage}>Inicio</button>
          <button onClick={goBack}>Voltar</button>
          </div>
        </Header>

        <Body>
          <h2>Trip Details Page:</h2>
          <p> Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
        </Body>
      </div>
    )
  }
 export default TripDetailsPage
  