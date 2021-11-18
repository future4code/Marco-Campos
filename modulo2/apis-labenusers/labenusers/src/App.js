import React from 'react';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';

export default class App extends React.Component {


  state={
    inicio : 1
  }    
  
  RenderizaTela = () =>{
      switch(this.state.inicio){
        case 1 :
          return <Cadastro/>
        
        case 2 :
          return <Lista/>

        default:
          return this.setState({
            inicio: 1
          })
      }
      
    }

    TrocarDeTela = () => {
      this.setState({
        inicio : this.state.inicio +1
      })
    }

  render() {

    return (
      <div>
        <button onClick={this.TrocarDeTela}>Trocar de tela</button>
        {this.RenderizaTela()}
      </div>
    )
  }
}
