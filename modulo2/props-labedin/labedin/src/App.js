import React from 'react';
import {CardGrande} from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import {CardPequeno} from './components/CardPequeno/CardPequeno'
import styled from 'styled-components'
import ImagemPerfil from './img/240952315_1210816172736767_4029799646330096209_n.jpg'


//Styled do app

const BodyApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const TitulosDeSecao = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

const ContainerConteudo = styled.div`
  width: 40vw;
  margin: 10px 0;

`





function App() {
  return (
    <BodyApp>



      <ContainerConteudo>
        <TitulosDeSecao>Dados pessoais</TitulosDeSecao>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Marco Raphael" 
          descricao="Oi, eu sou o Marco Raphael, tenho 22 anos, moro no Rio de Janeiro e sou aluno da Labenu. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </ContainerConteudo>



      <ContainerConteudo>
        <CardPequeno
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RF49wo0hUp6Qgzw81sWHui77A2MPbondhNl2ir6PI9VdHVJLObkCQ5hDrxXxtYketXk&usqp=CAU"
        texto="Email: Marco-raphael@hotmail.com"
        />
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
        texto="Endereço: Rio de Janeiro"
        />
      </ContainerConteudo>



      <ContainerConteudo>
        <TitulosDeSecao>Formação Acadêmica:</TitulosDeSecao>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png" 
          nome="Labenu" 
          descricao="Aluno e futuro Dev. FullStack" 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/727641198/logo_400x400.gif" 
          nome="Etrr- Escola Téc Resende Rammel" 
          descricao="pôs Médio téc. em Mecatrônica" 
        />
      </ContainerConteudo>



      <ContainerConteudo>
        <TitulosDeSecao>Minhas redes sociais</TitulosDeSecao>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerConteudo>




    </BodyApp>
  );
}

export default App;
