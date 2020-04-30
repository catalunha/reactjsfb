import React, { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: 'Carregando...',
      nome: '',
      idade: ''
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
    //get any update =  Olheiro
    // firebase.database().ref('token').on('value', (snapshot) => {
    //   let state = this.state
    //   state.token = snapshot.val()
    //   this.setState(state)
    // })
    //get one time
    firebase.database().ref('token').once('value').then((snapshot) => {
      let state = this.state
      state.token = snapshot.val()
      this.setState(state)
    })
    // firebase.database().ref('usuarios').child(1).child('nome').on('value',(snapshot)=>{
    //   let state = this.state
    //   state.nome = snapshot.val()
    //   this.setState(state)
    // })
    firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
      let state = this.state
      state.nome = snapshot.val().nome
      state.idade = snapshot.val().idade
      this.setState(state)
    })
  }

  render() {
    const { token, nome, idade } = this.state
    return (
      <div>
        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    )
  }
}

