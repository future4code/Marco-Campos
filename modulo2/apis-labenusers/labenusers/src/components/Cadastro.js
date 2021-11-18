import React from "react"
import axios from "axios"
import styled from 'styled-components'

const CadastroForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
gap: 10px;
`

export default class Cadastro extends React.Component {
  state = {
    name: "",
    email: "",
  }

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.post (url, body, {
          headers: {
            Authorization: "marco-raphael-carver"
          }
    })
    .then(() => {
      alert("Usuario cadastrado com sucesso")
      this.setState({
        name:"",
        email:""
      })
    })
    .catch((erro) => {
      console.log(erro.response.data)
    })  
  }

  onChangeNome = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    return (
      <CadastroForm>
        <h2>Formulario de Cadastro:</h2>

        <input
          onChange={this.onChangeNome}
          placeholder="Nome"
          value={this.state.name}
        ></input>

        <input
          onChange={this.onChangeEmail}
          placeholder="E-mail"
          value={this.state.email}
        ></input>

        <button onClick={this.createUser}>Criar Usuário</button>

      </CadastroForm>
    )
  }
}
