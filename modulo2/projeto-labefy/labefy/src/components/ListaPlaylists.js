import React from "react"
import styled from 'styled-components'
import axios from "axios"

const CardPlaylist = styled.div`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

export default class ListaPlaylists extends React.Component {

    state ={
        playlists: []
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

render(){
    console.log(this.state.playlists)
    const listaPlaylist = this.state.playlists.map((play)=>{
        return (
            <CardPlaylist key={play.id}>
                {play.name}
                <button onClick={() => this.deletarPlaylist(play.id)}>x</button>
            </CardPlaylist>
        )
    })

  return(
    <div>
        <hr/>
        <h2> Suas playlists: </h2>
        {listaPlaylist}
    </div>
  )
}

}