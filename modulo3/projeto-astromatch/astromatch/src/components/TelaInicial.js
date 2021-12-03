import React from "react";
import { Body, Header, Texto } from "./Styled";
import { Botoes, ContainerBotoes } from "./Styled";

function TelaInicial(props) {
  return (
    <div>
      <Header>
        <div></div>
        <h3>ASTRO MATCH</h3>
        <button onClick={props.mudarTela}>&#x1F495;</button>
      </Header>

      <Body>
        <img
          src={props.foto}
          alt="imagem de perfil"
          width="350px"
          height="350px"
        />

        <Texto>
          <h2>{props.nome},</h2>
          <h2>{props.idade}</h2>
        </Texto>

        <p>{props.bio}</p>

        <ContainerBotoes>
          <Botoes>
            <button onClick={props.perfilNaoEscolhido}>&#x1F494;</button>
          </Botoes>
          <Botoes>
            <button onClick={props.perfilEscolhido}>&#x1F493;</button>
          </Botoes>
        </ContainerBotoes>
        <p>Banininha group</p>
      </Body>
    </div>
  );
}

export default TelaInicial;
