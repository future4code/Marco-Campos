import React from "react"
import styled from 'styled-components'
import axios from 'axios'

const TelaCadastro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    gap: 5px;
`


export default class CadastroPlaylist extends React.Component {
    state = {
        nomePlaylist:""
    }

    playlist = (e) =>{
        this.setState({
            nomePlaylist: e.target.value
        })
    }

    cadastrarPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }
        axios.post(url, body, {
            headers: {
                Authorization: "marco-raphael-carver"
            }
        })
        .then((res)=>{
            alert("playlist cadastrada")
            this.setState({
                nomePlaylist: ""
            })
        })
        .catch((err)=>{
            alert("Algo deu errado")
        })
    }

render(){

  return(
    <TelaCadastro>
        <h2> Crie sua playlist: </h2>
        <p>nome da playlist:</p>
        <input
        placeholder="Nome"
        value={this.state.nomePlaylist}
        onChange={this.playlist}
        />
        <button
        onClick={this.cadastrarPlaylist}
        >cadastrar</button>
        
    </TelaCadastro>
  )
}

}