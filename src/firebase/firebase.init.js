import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

function firebaseInitialize() {
  initializeApp(firebaseConfig);
}

export default firebaseInitialize;
