import {Body, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"


function CreateTripPage () {
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
          <input
          placeholder='Nome'
          ></input>

          <input
          placeholder='Escolha Um Planeta'
          ></input>

          <input
          type="date"
          ></input>

          <input
          placeholder='Descrição'
          ></input>

          <input
          type="number"
          placeholder='Duração Em Dias'
          ></input>
        </Body>
      </div>
    )
  }
  export default CreateTripPage