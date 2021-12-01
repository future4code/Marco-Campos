import React from 'react'
import { Header } from '../App'

function TelaMatch(props) {
    return (
      <Header>
          <button onClick={props.mudarTela}>Inicio</button>
          TelaMatch
          <div></div>
      </Header>
    )
  }
  
  export default TelaMatch