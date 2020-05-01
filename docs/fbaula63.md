import React, { Component } from 'react';
import firebase from './firebaseConnection'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };

    this.cadastrar = this.cadastrar.bind(this)
  }
  cadastrar(e) {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((erro) => {
        if (erro.code === 'auth/invalid-email') {
          alert('Email invalido')
        } else if (erro.code === 'auth/weak-password') {
          alert('Senha fraca')
        } else {
        }
        alert('Codigo de erro: ' + erro.code)
      })
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.cadastrar}>
          Email: <input type='text' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br />
          Senha: <input type='text' value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /><br />
          <button type='submit'>Cadastrar</button>
        </form>
        email:{this.state.email}<br />
        senha: {this.state.senha}
      </div>
    )
  }
}

