import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'

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

export default firebase