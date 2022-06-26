import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBtOdM5rZww75yIvjw8LJiVAfPRJZA14Q",
  authDomain: "portaldotec.firebaseapp.com",
  databaseURL: "https://portaldotec-default-rtdb.firebaseio.com",
  projectId: "portaldotec",
  storageBucket: "portaldotec.appspot.com",
  messagingSenderId: "92277118698",
  appId: "1:92277118698:web:2b5dc46eaef42055976993",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();

export { auth, onAuthStateChanged, signInWithEmailAndPassword, signOut, db, set, ref };
