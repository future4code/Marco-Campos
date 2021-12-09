import {Body, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"

function LoginPage () {
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
          <h1>Login:</h1>
          <input
          placeholder='E-mail'
          ></input>
          <input
          placeholder='Senha'
          ></input>
          <button>Entrar</button>
        </Body>
      </div>
    )
  }
  export default LoginPage