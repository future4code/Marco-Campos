import styled from 'styled-components'


export const Header = styled.div`
display: flex;
width: 98%;
height: 80px;
align-items: center;
justify-content: space-between;
padding: 10px;
color: white;
background-color: #121124;
/* background-image: url("https://www.enjpg.com/img/2020/outer-space-background-3.jpg"); */
img{
    border-radius: 50px;
}
`

export const Logo = styled.div`
display: flex;
flex-direction: row;

`

export const Body = styled.div`
border: 5px solid white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
width: 98%;
min-height: 88vh;
position: absolute;
background-color: #121124;
`