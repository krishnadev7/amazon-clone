import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQLqHK_Eka57KxDxptEZ5OAWltiCTMF1A",
    authDomain: "clone-86a0f.firebaseapp.com",
    projectId: "clone-86a0f",
    storageBucket: "clone-86a0f.appspot.com",
    messagingSenderId: "29493756823",
    appId: "1:29493756823:web:da6d9a2a2b378105cc3ad2",
    measurementId: "G-JBE3FV10S5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }