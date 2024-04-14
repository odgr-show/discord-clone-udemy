import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL4IPoQcPcwwu-eKqnA-LG2HS089GMK50",
  authDomain: "discord-clone-udemy-ef2a7.firebaseapp.com",
  projectId: "discord-clone-udemy-ef2a7",
  storageBucket: "discord-clone-udemy-ef2a7.appspot.com",
  messagingSenderId: "536215278288",
  appId: "1:536215278288:web:8af9c39c5ea13bc44844d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, db};