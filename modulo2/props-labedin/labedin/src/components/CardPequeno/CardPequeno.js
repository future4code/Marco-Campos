import React from 'react'
import styled from 'styled-components';

const ContainerCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
`

const ImagemCardPequeno = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`

export function CardPequeno(props) {
    return (
        <ContainerCardPequeno>
            <ImagemCardPequeno src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerCardPequeno>
    )
}
