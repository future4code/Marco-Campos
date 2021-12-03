import { useEffect, useState } from "react";
import TelaInicial from "./components/TelaInicial";
import TelaMatch from "./components/TelaMatch";
import axios from "axios";
import { ContainerPrincipal } from "./components/Styled";

function App() {
  //Estados:

  //switchCase
  const [tela, setTela] = useState(1);
  //telaInicial
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [escolha, setEscolha] = useState(1);
  //telaMatch
  const [matchs, setMatchs] = useState([]);

  //--------------------------------------------------------
  //logica de renderização das telas inicial e de match-----

  const mudarTela = () => {
    setTela(tela + 1);
  };

  const renderizarTela = () => {
    switch (tela) {
      case 1:
        return (
          <TelaInicial
            mudarTela={mudarTela}
            nome={name}
            idade={age}
            foto={photo}
            bio={bio}
            perfilNaoEscolhido={perfilNaoEscolhido}
            perfilEscolhido={perfilEscolhido}
          />
        );
      case 2:
        return (
          <TelaMatch
            mudarTela={mudarTela}
            matchs={matchs}
            limparMatch={limparMatch}
          />
        );
      default:
        return setTela(1);
    }
  };

  //----------------------------------------------------------
  //logica de comunicaçao com a Api para PEGAR o perfil ------

  const urlFixa =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marco";

  const pegarPerfil = () => {
    const urlVariavel = "/person";
    axios
      .get(urlFixa + urlVariavel)
      .then((res) => {
        setId(res.data.profile.id);
        setAge(res.data.profile.age);
        setName(res.data.profile.name);
        setPhoto(res.data.profile.photo);
        setBio(res.data.profile.bio);
      })
      .catch((err) => {
        alert(
          "ocorreu um erro, por favor, tente novamente ou limpe seus matchs"
        );
      });
  };

  useEffect(() => {
    pegarPerfil();
  }, [escolha]);

  //----------------------------------------------------------
  //logica de comunicaçao com a Api para ESCOLHER o perfil ---

  const perfilEscolhido = () => {
    const urlVariavel = "/choose-person";
    const body = {
      id: id,
      choice: true,
    };
    axios
      .post(urlFixa + urlVariavel, body)
      .then((res) => {
        setEscolha(escolha - 1);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //-----------------------------------------------------------
  //Logica de comunicaçao com a Api para nao escolher o perfil-

  const perfilNaoEscolhido = () => {
    const urlVariavel = "/choose-person";
    const body = {
      id: id,
      choice: false,
    };
    axios
      .post(urlFixa + urlVariavel, body)
      .then((res) => {
        setEscolha(escolha + 1);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  //----------------------------------------------------------
  //Logica de comunicaçao com a Api para mostrar os matchs----

  const mostrarMatch = () => {
    const urlVariavel = "/matches";
    axios
      .get(urlFixa + urlVariavel)
      .then((res) => {
        setMatchs(res.data.matches);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    mostrarMatch();
  }, [escolha, tela]);

  //----------------------------------------------------------
  //Limpar perfis curtidos------------------------------------

  const limparMatch = () => {
    const urlVariavel = "/clear";
    axios
      .put(urlFixa + urlVariavel)
      .then((res) => {
        alert("Matchs Limpos");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  //Renderizaçao do App.js------------------------------------
  return <ContainerPrincipal>{renderizarTela()}</ContainerPrincipal>;
}

export default App;
//--------------------------------------------------------------
