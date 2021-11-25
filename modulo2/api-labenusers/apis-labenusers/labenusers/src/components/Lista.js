import axios from "axios"
import React, { useReducer } from "react"
import styled from "styled-components"

const CardUser = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

const ListaForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
gap: 10px;
`

export default class Lista extends React.Component {

  state ={
    usuario: []
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () =>{
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
      axios.get(url,{
            headers: {
                Authorization : "marco-raphael-carver"
            }   
        }).then((resposta)=>{
            this.setState({
              usuario: resposta.data
            })
        }).catch((erro)=>{
            alert("Ocorreu um problema, tente novamente!")
        })
    }

  deleteUser = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers:{
        Authorization: "marco-raphael-carver"
    }
    })
    .then((resposta)=>{
      alert("Usuario deletado com sucesso")
      this.getAllUsers()
    })
    .catch((erro)=>{
      alert("ocorreu um erro, tente novamente!")
    })
  }

  render() {

    console.log(this.state.usuario)

    const listaUser = this.state.usuario.map((user)=>{
      return( 
        <CardUser key={user.id} > 
          {user.name} 
          <button onClick={()=> this.deleteUser(user.id)}>X</button>
        </CardUser>
      )
    })


    return (
      <ListaForm>

        <button onClick={this.getAllUsers}>buscar Usuario</button>
        {listaUser}
        <hr />

      </ListaForm>
    );
  }
}
