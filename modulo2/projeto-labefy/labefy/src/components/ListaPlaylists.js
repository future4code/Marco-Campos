import React from "react"
import styled from 'styled-components'
import axios from "axios"

const ContainerPlaylist = styled.div`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 600px;
`
const TelaLista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    width: 100vw;
`
const CardDetalhes = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const CardPlaylists = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`
const InputsCard = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`


export default class ListaPlaylists extends React.Component {

    state ={
        playlists: [],
        detalhes:[],
        name:"" ,
        artist:"" ,
        url:""
    }

    componentDidMount(){
        this.pegarPlaylists()
    }

    pegarPlaylists = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers:{
                Authorization: "marco-raphael-carver"
            }
        })
        .then((res)=>{
            this.setState({
                playlists: res.data.result.list
            })
        })
        .catch((err)=>{
            alert("algo deu errado")
        })
    }

    deletarPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`

        axios.delete(url, {
            headers:{
                Authorization: "marco-raphael-carver"
            }
        })
        .then((res)=>{
            alert("playlist deletada")
            this.pegarPlaylists()
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    detalharPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        axios.get(url, {
            headers:{
                Authorization: "marco-raphael-carver"
            }
        })
        .then((res) =>{
            this.setState({
                detalhes:[]
            })
            this.setState({
                detalhes: res.data.result.tracks
            })
            console.log(res.data.result.tracks)
        })
        .catch((err) =>{
            console.log(err.response.data)
        })
    }


    adicionarMusica = (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
                name: this.state.name ,
                artist: this.state.artist ,
                url: this.state.url
        }
        axios.post(url, body, {
            headers:{
                Authorization: "marco-raphael-carver"
            }
        })
        .then((res)=>{
            alert("musica adicionada")
            this.setState({
                name:"" ,
                artist:"" ,
                url:"" 
            })
        })
        .catch((err)=>{
            alert("ocorreu um erro")
        })
    }

    pegarNome = (e) => {
        this.setState({
            name: e.target.value 
        })
    }
    pegarArtista = (e) => {
        this.setState({
            artist: e.target.value 
        })
    }
    pegarUrl= (e) => {
        this.setState({
            url: e.target.value 
        })
    }

render(){

    const listaPlaylist = this.state.playlists.map((play)=>{
        
        return (
            
            <ContainerPlaylist key={play.id}>
                
                <CardPlaylists>
                {play.name}
                <button onClick={() => this.adicionarMusica(play.id)}>Adicionar a Musica</button>
                <button onClick={() => this.detalharPlaylist(play.id)}>Detalhes</button>
                <button onClick={() => this.deletarPlaylist(play.id)}>x</button>
                </CardPlaylists>

            </ContainerPlaylist>
        )
    })
    
    const detalhesList = this.state.detalhes.map((track) =>{
            return(
                <ul>
                    <li>{track.artist} - {track.name}</li>
                    <audio controls>
                        <source src={track.url} type="audio/mp3"/>        
                    </audio>
                </ul>
            )
        })



  return(
    <TelaLista>
        
        <h2> Suas playlists: </h2>
        <h3> Adicione musicas a sua playlist </h3>

                <InputsCard>
                    <input
                    placeholder="artista"
                    value={this.state.artist}
                    onChange={this.pegarArtista}
                    />
                    <input
                    placeholder="nome da musica"
                    value={this.state.name}
                    onChange={this.pegarNome}
                    />
                    <input
                    placeholder="link da musica"
                    value={this.state.url}
                    onChange={this.pegarUrl}
                    />
                    
                </InputsCard>
        
        <hr/>

        
        {listaPlaylist}

        <CardDetalhes >
            <h2>detalhes: </h2>
            {detalhesList}
        </CardDetalhes >

        
    </TelaLista>
  )
}

}