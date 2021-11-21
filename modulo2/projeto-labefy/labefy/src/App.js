import React from "react"
import CadastroPlaylist from "./components/CadastroPlaylist"
import ListaPlaylists from "./components/ListaPlaylists"
import styled from "styled-components"

const TelaPrincipal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class App extends React.Component {

  state ={
    telaAtual: 1
  }

  escolheTela = () =>{
    switch (this.state.telaAtual) {
      case 1:
        return <CadastroPlaylist/>
      case 2:
        return <ListaPlaylists/>
      default:
        return this.setState({
          telaAtual: 1
        })
    }
  }

  mudarTela = () =>{
    this.setState({
      telaAtual : this.state.telaAtual + 1
    })
  }

render(){

  return(
    <TelaPrincipal>
      <button onClick={this.mudarTela} > Proxima Tela </button>
      {this.escolheTela()}
      {/* <audio controls>
        <source src="http://spoti4.future4.com.br/1.mp3" type="audio/mp3"/>        
      </audio> */}
    </TelaPrincipal>
  )
}

}

