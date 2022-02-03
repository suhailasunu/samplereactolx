import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBujvya7QNDfGQMKW60AClUGorknLq5vyY",
    authDomain: "olx-demo-a55ee.firebaseapp.com",
    projectId: "olx-demo-a55ee",
    storageBucket: "olx-demo-a55ee.appspot.com",
    messagingSenderId: "598477543251",
    appId: "1:598477543251:web:4ba555189c41eea54c73a6",
    measurementId: "G-W637KTM57X"
  };

  export default firebase.initializeApp(firebaseConfig)