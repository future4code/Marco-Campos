import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 98%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: white;
  background-color: #121124;
  font-family: fantasy;
  /* background-image: url("https://www.enjpg.com/img/2020/outer-space-background-3.jpg"); */
  background-image: url("https://image.freepik.com/fotos-gratis/as-belas-estrelas-brilhando-no-ceu-noturno_181624-622.jpg");
  img {
    border-radius: 50px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Body = styled.div`
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 98%;
  min-height: 88vh;
  position: absolute;
  background-image: url("https://image.freepik.com/fotos-gratis/as-belas-estrelas-brilhando-no-ceu-noturno_181624-622.jpg");
  gap: 10vw;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  img {
    border-radius: 500px;
    width: 20vw;
  }
`;

export const TextoBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

export const InputsCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.5em;
`;

export const CardViagem = styled.div`
  background-color: #0a0017;
  border: 1px solid black;
  width: 40vw;
  padding: 10px;
  min-height: 33vh;
  box-shadow: 10px 5px 10px black;
  p{
    font-size: 1.1em;
  }
`;

export const BodyCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  align-items: center;
  justify-content: center;
`;
