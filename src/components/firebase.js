import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABUFmVo8XRop8Vqu8Ra43zppJu3A3sETg",
  authDomain: "budget-app-4ab4c.firebaseapp.com",
  databaseURL: "https://budget-app-4ab4c-default-rtdb.firebaseio.com",
  projectId: "budget-app-4ab4c",
  storageBucket: "budget-app-4ab4c.appspot.com",
  messagingSenderId: "459178565922",
  appId: "1:459178565922:web:3f576ec21b1ed6c774457b"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);