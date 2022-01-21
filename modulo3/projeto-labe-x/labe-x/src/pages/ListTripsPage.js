import {Body, BodyCard, CardViagem, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'

function ListTripsPage () {
  const [viagens, setViagens] = useState([])

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }
  
  const goBack = () => {
    history.goBack()
  }

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }
    
    const getTrips = () => {
      const url ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/marco/trips"
      
      axios
      .get(url)
      .then((res)=>{
        setViagens(res.data.trips)
      })
      .catch((err)=>{
        alert("Tivemos um erro no carregamento da pagina, por favor, tente novamente")
      })
    }

  useEffect(()=>{ 
    getTrips()
  },[])

  const viagem = viagens.map((trip)=>{
    return(
      <CardViagem>
        <p> <b>nome:</b> {trip.name}</p>
        <p> <b>descrição:</b> {trip.description}</p>
        <p> <b>planeta:</b> {trip.planet}</p>
        <p> <b>duração:</b> {trip.durationInDays}</p>
        <p> <b>data:</b> {trip.date}</p>
        <p>{trip.id}</p>
      </CardViagem>
    )
  })

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
          <button onClick={goToApplicationFormPage}>Inscreva-se</button>
          <button onClick={goBack}>Voltar</button>
        </div>
      </Header>
      <Body>
        <BodyCard>
        {viagem}
        </BodyCard>
      </Body>
    </div>
  )
  }
  export default ListTripsPage