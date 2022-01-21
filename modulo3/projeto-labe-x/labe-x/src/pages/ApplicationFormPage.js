import {Body, Header, InputsCadastro, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function ApplicationFormPage () {
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }
  
  const goBack = () => {
    history.goBack()
  }

  const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState(0)
  const [texto, setTexto] = useState("")
  const [proficao, setProficao] = useState("")
  const [pais, setPais] = useState("")
  const [viagens, setViagens] = useState([])

  const getTrips = () => {
    const url ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/marco/trips"
    
    axios
    .get(url)
    .then((res)=>{
      setViagens(res.data.trips.id)
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
    <select>
              <option value disabled selected>Escolha uma viagem</option>
              <option value={trip.id}>{trip.name}</option>
              <option></option>
            </select>
  )
})

  const ApplyToTrip = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marco/trips/DvGySdkNHgVlLICHUa9c/apply"
    const body = {
      name: nome,
      age: idade,
      applicationText: texto,
      profession: proficao,
      country: pais
    }
    axios
    .post(url,body)
    .then((res)=>{
      console.log(res.data)
      setNome("")
      setIdade(0)
      setTexto("")
      setProficao("")
      setPais("")
    })
    .catch((err)=>{
      console.log(err.response.data)
    })
  }

  const onChangeNome = (e) => {
    setNome(e.target.value)
  }
  const onChangeIdade = (e) => {
    setIdade(e.target.value)
  }
  const onChangeTexto = (e) => {
    setTexto(e.target.value)
  }
  const onChangeProficao = (e) => {
    setProficao(e.target.value)
  }
  const onChangePais = (e) => {
    setPais(e.target.value)
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

        <img
          src="https://image.freepik.com/vetores-gratis/astronauta-trabalhando-no-laptop-e-escrevendo-a-ilustracao-dos-desenhos-animados-conceito-de-negocio-de-ciencia-isolado-estilo-flat-cartoon_138676-3447.jpg"
          alt=""
        />

        

          <InputsCadastro>
          <p>
            Coloque seus dados, e espere pela sua vaga em nossas viagens!!
          </p>
            {viagem}

            <span>Nome:
            <input
            placeholder="Nome"
            value={nome}
            onChange={onChangeNome}
            /> </span>
            
            <span> Idade:
            <input
            placeholder="Idade"
            value={idade}
            onChange={onChangeIdade}
            type="number"
            min="18"
            /></span>

            <span> Texto:
            <input
            placeholder="Texto de Candidatura"
            value={texto}
            onChange={onChangeTexto}
            /></span>

            <span> Profissao:
            <input
            placeholder="Profissão"
            value={proficao}
            onChange={onChangeProficao}
            /></span>

            <span>Pais:
            <input
            placeholder="País"
            value={pais}
            onChange={onChangePais}
            /></span>
            
            <button onClick={ApplyToTrip}>enviar</button>
            
          </InputsCadastro>

        </Body>
      </div>
    )
  }

  export default ApplicationFormPage