import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDLl9AdUZA__Fa0ENPiMHMc9ByTV_lEz4A",
    authDomain: "personalblog-d4f37.firebaseapp.com",
    projectId: "personalblog-d4f37",
    storageBucket: "personalblog-d4f37.appspot.com",
    messagingSenderId: "1043264072435",
    appId: "1:1043264072435:web:5243eeb6098bfda81d2586"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

let googleAuthenticationProvider = new  firebase.auth.GoogleAuthProvider();

export const SignInWithGoogle = ()=> auth.signInWithPopup(googleAuthenticationProvider);

export default firebase;

