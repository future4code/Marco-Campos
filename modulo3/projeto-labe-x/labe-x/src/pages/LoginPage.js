import {Body, Header, Logo} from '../components/Styled'
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'


function LoginPage () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const OnClickLogin = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marco/login"
    const body = {
      email: email,
      password: password
    }
    axios
    .post(url,body)
    .then((res)=>{
      goToAdminHomePage()
    })
    .catch((err)=>{
      alert("E-mail ou senha incorretos, tente novamente!")
    }) 

    
    setEmail("")
    setPassword("")
  }

  const history = useHistory()

  const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
      }
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
          value={email}
          onChange={onChangeEmail}
          type="email"
          ></input>

          <input
          placeholder='Password'
          value={password}
          onChange={onChangePassword}
          type="password"
          ></input>

          <button onClick={OnClickLogin}>Entrar</button>
        </Body>
      </div>
    )
  }
  export default LoginPage