import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPJsCCLwWKKNYAOnoikXb7sEPO8oPjTF8",
  authDomain: "to-do-list-4b668.firebaseapp.com",
  projectId: "to-do-list-4b668",
  storageBucket: "to-do-list-4b668.appspot.com",
  messagingSenderId: "623137752735",
  appId: "1:623137752735:web:db2f2ecc5ed2abe28444aa",
  measurementId: "G-MDLVMXM9L5"
});

const database = firebaseApp.firestore();

export default database;