
import React, { Component } from 'react';
import firebase from './firebaseConnection'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
    };

    this.cadastrar = this.cadastrar.bind(this)
    // this.logar = this.logar.bind(this)
    // this.sair = this.sair.bind(this)
    //desconectar qq usuario
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // alert('Usuario logado com sucesso. \nEmail: ' + user.email)
        firebase.database().ref('usuarios').child(user.uid).set({ nome: this.state.nome, email: this.state.email })
          .then(() => {
            this.setState({ nome: '', senha: '', email: '' })
          })
      }
    })
  }
  cadastrar(e) {

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((erro) => {
        alert('Erro: ' + erro.code)
      })
    e.preventDefault()
  }
  // logar(e) {
  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
  //     .catch((erro) => {
  //       if (erro.code === 'auth/wrong-password') {
  //         alert('Senha incorreta...')
  //       }
  //       alert('Codigo de erro: ' + erro.code)
  //     })
  //   e.preventDefault()
  // }
  // sair() {
  //   firebase.auth().signOut()
  //   alert('Deslogado')
  // }
  render() {
    return (
      <div>
        <h1>Novo usuario</h1>
        <form onSubmit={(e) => this.cadastrar(e)}>
          Nome: <input type='text' value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} /><br />
          Email: <input type='text' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br />
          Senha: <input type='text' value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /><br />
          <button type='submit'>Cadastrar</button>
        </form>
        <br />
        <hr />
        {/* <h1>Logar</h1>
        <form onSubmit={this.logar}>
          Email: <input type='text' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br />
          Senha: <input type='text' value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /><br />
          <button type='submit'>Logar</button>
        </form>
        <br />
        <hr/>
        <button onClick={this.sair} >Sair</button><br />
        <hr/> */}
        nome:{this.state.nome}<br />
        email:{this.state.email}<br />
        senha: {this.state.senha}
      </div>
    )
  }
}

