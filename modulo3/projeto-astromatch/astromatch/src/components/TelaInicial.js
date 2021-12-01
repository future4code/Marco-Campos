import React from 'react'
import { Header } from '../App'

function TelaInicial(props) {
    return (
      <div>

      <Header>
          <div></div>
          TelaInicial
          <button onClick={props.mudarTela}>Matchs</button>
      </Header>

      <div>
        
      </div>

      </div>
    )
  }
  
  export default TelaInicial