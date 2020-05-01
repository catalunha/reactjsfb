import React, { Component } from 'react';
import firebase from './firebaseConnection'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };

    firebase.database().ref('usuarios').on('value', (snapshot) => {
      let state = this.state
      state.lista = []
      snapshot.forEach((childItem) => {
        state.lista.push({
          key: childItem.key,
          nome: childItem.val().nome,
          idade: childItem.val().idade,
        })
      })
      this.setState(state)
    })
  }


  render() {
    return (
      <div>
        {this.state.lista.map((item) => {
          return (
            <div key={item.key}>
              <h1>{item.nome}</h1>
              <h2>{item.idade}</h2>
              <h3>{item.key}</h3>
            <hr/>
            </div>
          )
        })}
      </div>
    )
  }
}

