import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeTtC_9YzsXww3cwaOSYw6VOm3WDvbtVI",
  authDomain: "join-5d179.firebaseapp.com",
  projectId: "join-5d179",
  storageBucket: "join-5d179.appspot.com",
  messagingSenderId: "374777855128",
  appId: "1:374777855128:web:1622739c3612223bd0e4ed",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
