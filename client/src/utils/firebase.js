
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider}from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotes-c1110.firebaseapp.com",
  projectId: "authexamnotes-c1110",
  storageBucket: "authexamnotes-c1110.firebasestorage.app",
  messagingSenderId: "332323524902",
  appId: "1:332323524902:web:66b040660796a50cac71e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider =new GoogleAuthProvider();
export{auth,provider}