import React from "react"
import CadastroPlaylist from "./components/CadastroPlaylist"
import ListaPlaylists from "./components/ListaPlaylists"

export default class App extends React.Component {

render(){

  return(
    <div>
      <CadastroPlaylist/>
      <ListaPlaylists/>
    </div>
  )
}

}

