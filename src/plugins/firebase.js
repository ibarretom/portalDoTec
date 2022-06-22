import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBtOdM5rZww75yIvjw8LJiVAfPRJZA14Q",
  authDomain: "portaldotec.firebaseapp.com",
  projectId: "portaldotec",
  storageBucket: "portaldotec.appspot.com",
  messagingSenderId: "92277118698",
  appId: "1:92277118698:web:2b5dc46eaef42055976993",
};

initializeApp(firebaseConfig);

const auth = getAuth()

export { auth, onAuthStateChanged, signInWithEmailAndPassword, signOut }