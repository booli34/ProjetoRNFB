import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDzs5BaxwL4g5l4g02nWlnkQWgN1UfAhcQ",
    authDomain: "colecionaveis03.firebaseapp.com",
    databaseURL: "https://colecionaveis03.firebaseio.com",
    projectId: "colecionaveis03",
    storageBucket: "colecionaveis03.appspot.com",
    messagingSenderId: "455226946820",
    appId: "1:455226946820:web:c80a057e5a474d5cb3cc51",
    measurementId: "G-BKR74YDKT7"
  };

  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();