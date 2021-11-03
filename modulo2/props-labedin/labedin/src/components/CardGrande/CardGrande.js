import React from 'react';
import styled from 'styled-components'

const BigCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: black 1px solid;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    
`

const ImagemCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const TextoCard = styled.h4`
    margin-bottom: 15px;
`

const ContainerDeTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

export function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImagemCard src={ props.imagem } />
            <ContainerDeTexto>
                <TextoCard>{ props.nome }</TextoCard>
                <p>{ props.descricao }</p>
            </ContainerDeTexto>
        </BigCardContainer>
    )
}
