import {Body, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"


function AdminHomePage () {
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }
  
  const goBack = () => {
    history.goBack();
  }

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create")
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
          <button onClick={goToCreateTripPage}>Criar Viagem</button>
          <button onClick={goBack}>Voltar</button>
          </div>
        </Header>

        <Body>
          <h2>Admin Home Page:</h2>
          <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
        </Body>
      </div>
    )
  }

  export default AdminHomePage