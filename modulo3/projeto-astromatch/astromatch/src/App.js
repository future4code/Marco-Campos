import { useEffect, useState } from "react"
import TelaInicial from "./components/TelaInicial"
import TelaMatch from "./components/TelaMatch"
import styled from "styled-components"
import axios from "axios"

//componente do header-----------------------------------
  export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 500px;
    border: 1px solid black;
    margin-top: 100px;
    padding: 10px;
    div{
      width: 35px;
    }
  `
//--------------------------------------------------------

function App() {

//logica de renderização das telas inicial e de match-----

  const [tela, setTela] = useState(1)

  const mudarTela = () => {
    setTela(tela + 1)
  }

  const renderizarTela = () => {
    switch (tela) {
      case 1:
        return <TelaInicial 
        mudarTela = {mudarTela}
        />
      case 2:
        return <TelaMatch
         mudarTela = {mudarTela}
         />
      default:
        return setTela(1)
    }
  }

//----------------------------------------------------------
//logica de comunicaçao com a Api para pegar os perfis -----

  const urlFixa = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno`
  
  const pegarPerfil = () => {
    const urlVariavel = `/person`
    axios.get(urlFixa+urlVariavel, {
      headers:{
        Authorization: "marco-raphael-carver"
      }
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }

  useEffect(()=>{
    pegarPerfil()
  })
//------------------------------------------------------------

  return (
    <div>
      {renderizarTela()}
    </div>
  )
}

export default App
