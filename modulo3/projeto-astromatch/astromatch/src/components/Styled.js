import styled from "styled-components";

//componentes do header-----------------------------------------------

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 350px;
  border-bottom: 1px solid black;
  padding: 10px;
  div {
    width: 53px;
  }
  button {
    background-color: white;
    font-size: 30px;
    border: none;
    outline: none;
    &:hover {
      transform: scale(1.3);
      transition: all ease 0.5s;
    }
  }
`;

//----------------------------------------------------------------------
//Componentes do body---------------------------------------------------

export const ContainerPrincipal = styled.div`
  border: 2px solid black;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 15px;
  box-shadow: 0 0 1em black;
  min-height: 500px;
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  &:hover {
    transform: scale(1.1);
    transition: all ease 0.5s;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 350px;
  padding: 10px;
  p {
    text-align: center;
  }
`;

export const Texto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
`;
export const boxImage = styled.div`
  width: 350px;
  height: 750px;
  img {
    width: 350px;
    height: 750px;
  }
`;

export const ContainerBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    outline: none;
    background-color: white;
    font-size: 50px;
    border: 2px solid red;
    border-radius: 100px;
  }
`;

//-----------------------------------------------------------------
//Styled da tela de match------------------------------------------

export const TelaMatchs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 500px;
  justify-content: space-between;
  button {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const Matchs = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  width: 350px;
  padding: 10px;
  img {
    border-radius: 50px;
  }
`;
