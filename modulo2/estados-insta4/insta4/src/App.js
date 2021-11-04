import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Veronica'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Francielle'}
          fotoUsuario={'https://picsum.photos/52/50'}
          fotoPost={'https://picsum.photos/201/150'}
        />

        <Post
          nomeUsuario={'Miguel'}
          fotoUsuario={'https://picsum.photos/53/50'}
          fotoPost={'https://picsum.photos/202/150'}
        />

        <Post
          nomeUsuario={'Marco'}
          fotoUsuario={'https://picsum.photos/54/50'}
          fotoPost={'https://picsum.photos/203/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
