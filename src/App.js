import React, { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
    const firebaseConfig = {
      apiKey: "AIzaSyCr5mCRt9bGwobghuPfnWQ-sxEUt0g5GiE",
      authDomain: "reactapp-3c196.firebaseapp.com",
      databaseURL: "https://reactapp-3c196.firebaseio.com",
      projectId: "reactapp-3c196",
      storageBucket: "reactapp-3c196.appspot.com",
      messagingSenderId: "369452747759",
      appId: "1:369452747759:web:0880d7aa90bb644382041a",
      measurementId: "G-EH2JH8GS7Y"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
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
            <div>
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

