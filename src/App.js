import React, { Component } from 'react';
import firebase from './firebaseConnection'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      user: null
    };

    this.cadastrar = this.cadastrar.bind(this)
    this.logar = this.logar.bind(this)
    this.auth = this.auth.bind(this)
    this.sair = this.sair.bind(this)

  }
  componentDidMount() {
    this.auth()
  }
  auth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user })
      }
    })
  }
  cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((erro) => {
        alert('Erro: ' + erro.code)
      })
  }
  logar() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((erro) => {
        alert('Erro: ' + erro.code)
      })
  }
  sair() {
    firebase.auth().signOut().then(() => {
      this.setState({ user: null })
      alert('Deslogado com sucesso')
    })
  }

  render() {
    return (
      <div>
        {this.state.user
          ?
          <div>
            <p>App</p>
            <button onClick={this.sair}>Sair</button>
          </div>
          :
          <div>
            <h1>Sejam bem vindo</h1>
Email: <input type='text' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br />
Senha: <input type='text' value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /><br />
            <button onClick={this.cadastrar}>Cadastrar</button>
            <button onClick={this.logar}>Logar</button>
          </div>
        }

      </div>
    )
  }
}

