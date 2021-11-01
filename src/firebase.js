import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnekNpNY3ANwFpBqCPP_ckkLCYDnYxdLU",
  authDomain: "bubblepop-b1118.firebaseapp.com",
  databaseURL: "https://bubblepop-b1118-default-rtdb.firebaseio.com",
  projectId: "bubblepop-b1118",
  storageBucket: "bubblepop-b1118.appspot.com",
  messagingSenderId: "380609929941",
  appId: "1:380609929941:web:1820805061666ef5a3785c",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const test = () => {
  alert("TEST");
};

export default database;
