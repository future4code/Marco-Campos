import axios from "axios";
import React from "react";

export default class Lista extends React.Component {

    getUserById = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",{
            headers: {
                Authorization : "marco-raphael-carver"
            }
            
        }).then((resposta)=>{
            console.log(resposta.data)
        }).catch((erro)=>{
            console.log(erro.data)
        })
    }

  render() {
    return (
      <div>
        <ul>
          <li>aa</li>
          <li>bb</li>
        </ul>
        <button onClick={this.getUserById}>lala</button>
        <hr />

        <p>Procurar Usuário</p>
        <input></input>
        <button>Salvar edição</button>
      </div>
    );
  }
}
