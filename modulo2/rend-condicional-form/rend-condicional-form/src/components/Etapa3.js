import React from "react";



export default class Etapa3 extends React.Component {
  render() {

    return (
        <div>
            <h1>Etapa 3 - Informações gerais de ensino</h1>

            <p>5. Por que você não terminou um curso de graduaçâo?</p>
            <input></input>

            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value ="sim" >sim</option>
                <option value ="nao" >não</option>
            </select>
        </div>
    )
  }
}
