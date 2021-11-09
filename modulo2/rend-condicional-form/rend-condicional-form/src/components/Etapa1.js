import React from "react";


export default class Etapa1 extends React.Component {

  render() {

    return (
        <div>
            <h1>Etapa 1 - Dados Gerais</h1>

            <p>1. Qual seu nome?</p>
            <input></input>

            <p>2. Qual sua idade?</p>
            <input></input>

            <p>3. Qual seu e-mail?</p>
            <input></input>

            <p>4. Qual o seu grau de escolaridade?</p>
            <select name="select">
                <option value="ensino medio completo">ensino medio completo </option>
                <option value="ensino medio incompleto">ensino medio incompleto</option>
                <option value="ensino superior">ensino superior</option>
            </select>


        </div>
    )
  }
}
