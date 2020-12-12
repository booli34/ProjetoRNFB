import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtM9pVQ00katWMhlDvQOA-ZoS2Ltiu1rg",
    authDomain: "projetorn-f6f96.firebaseapp.com",
    databaseURL: "https://projetorn-f6f96.firebaseio.com",
    projectId: "projetorn-f6f96",
    storageBucket: "projetorn-f6f96.appspot.com",
    messagingSenderId: "967882797045",
    appId: "1:967882797045:web:aaab7571424f523e18fabc",
    measurementId: "G-Q0KB7Z0ZP7"
  };

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();