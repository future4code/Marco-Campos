import {Body, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"


function ApplicationFormPage () {
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
          <h2>Application Form Page:</h2>
          <p> Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
        </Body>
      </div>
    )
  }

  export default ApplicationFormPage