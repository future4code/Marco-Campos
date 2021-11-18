import React from "react";
import axios from "axios";

export default class Cadastro extends React.Component {
  state = {
    name: "",
    email: "",
  }

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    }

    axios.post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body,
      {
        headers: {
            Authorization : "marco-raphael-carver"
        },
      }
    ).then((resposta)=>{
        console.log(resposta.data)
    }).catch((erro)=>{
        console.log(erro.response.data)
    })
  }

  onChangeNome =(event)=>{
    this.setState({
        name: event.target.value 
      }) 
  }
  
  onChangeEmail =(event)=>{
   this.setState({
     email: event.target.value 
   }) 
}

  render() {
    return (
      <div>
        <input 
        onChange = {this.onChangeNome}
        placeholder ="Nome"
        value ={this.state.name}
        ></input>
                <input 
        onChange = {this.onChangeEmail}
    placeholder = "E-mail"
        value ={this.state.email}
        ></input>
        <button onClick={this.createUser}>Criar Usuário</button>
      </div>
    )
  }
}
