import styled from 'styled-components'
import sidebar from '../../assets/sidebar.png'


export const Body = styled.div`
`

export const ScreenContainer = styled.div`
width: 100vw;
height: 100vh;
display:flex;
background: #EFEFEF;
`

export const Sidebar = styled.div`
width: 38.3125vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: url(${sidebar}) no-repeat center center;
`

export const NumberContainer = styled.div`
width:100% ;
height:6.9375vw ;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const RightContainer = styled.div`
display:flex ;
flex-direction:column;
align-items:center;
justify-content: space-evenly;
width:61.6875vw ;
height:100vh ;
`

export const Ellipse = styled.div`
width:6.9375vw ;
height:6.9375vw ;
border-radius:50%;
background: #FFFFFF;
display:flex;
justify-content: center;
align-items: center;

`