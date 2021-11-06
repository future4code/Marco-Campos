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
  state = {    
    inputNome : "",
    inputFotoUsuario : "",
    inputFotoPost : "",


      listaDePosts : [
    {
      nomeUsuario : 'Veronica',
      fotoUsuario : 'https://picsum.photos/51/50',
      fotoPost : 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario : 'Marco',
      fotoUsuario : 'https://picsum.photos/52/50',
      fotoPost : 'https://picsum.photos/201/150'
    },
    {
      nomeUsuario : 'Francielle',
      fotoUsuario : 'https://picsum.photos/53/50',
      fotoPost : 'https://picsum.photos/202/150'
    }
    ]
}


  guardarNome = (event) =>{
    this.setState({inputNome : event.target.value})
  }

  guardarFotoUsuario = (event) =>{
    this.setState({inputFotoUsuario : event.target.value})
  }

  guardarFotoPost = (event) =>{
    this.setState({inputFotoPost : event.target.value})
  }

  adicionaPost = ()=>{
    const novoPost = {
      inputNome : this.state.inputNome,
      inputFotoPost : this.state.inputFotoPost,
      inputFotoUsuario : this.state.inputFotoUsuario
    }
    const copia =[...this.state.listaDePosts, novoPost ]
  
  }

  


  render() {
       const postagem =  this.state.listaDePosts.map((post) =>{
        return(
          <Post
          nomeUsuario =  {post.nomeUsuario}
          fotoUsuario =  {post.fotoUsuario}
          fotoPost    =  {post.fotoPost}
          />
        )
      })

    
    return (

      <MainContainer>
        {postagem}
 

    <div>
      <input 
      value ={this.state.inputNome} 
      onChange ={this.guardarNome} 
      placeholder=" nome" 
      />

      <input 
      value ={this.state.inputFotoUsuario} 
      onChange ={this.guardarFotoUsuario} 
      placeholder=" foto user" 
      />

      <input 
      value ={this.state.inputFotoPost} 
      onChange ={this.guardarFotoPost} 
      placeholder=" foto post" 
      />

      <button onClick={this.adicionaPost} >enviar</button>
    </div>

      </MainContainer>
    );
  }
}

export default App;
    {/*
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
        /> */}