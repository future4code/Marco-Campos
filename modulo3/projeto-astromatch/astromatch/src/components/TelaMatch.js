import React from "react";
import { Body, Header, TelaMatchs, Matchs } from "./Styled";

function TelaMatch(props) {
  const RenderizarMatchs = props.matchs.map((user) => {
    return (
      <Matchs key={user.id}>
        <img src={user.photo} width="40px" height="40px" alt="" />- {user.name}
      </Matchs>
    );
  });
  return (
    <TelaMatchs>
      <Header>
        <button onClick={props.mudarTela}> &#x1F49E; </button>
        <h3>ASTRO MATCH</h3>
        <div></div>
      </Header>

      <Body>{RenderizarMatchs}</Body>

      <button onClick={props.limparMatch}>limpar swipes e matchs</button>
    </TelaMatchs>
  );
}

export default TelaMatch;
