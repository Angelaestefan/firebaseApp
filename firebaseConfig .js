// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCDp-nEJ9wKkDMwUtM-IXZYdo9SxUE7_bo",
  authDomain: "fir-app-4454a.firebaseapp.com",
  projectId: "fir-app-4454a",
  storageBucket: "fir-app-4454a.firebasestorage.app",
  messagingSenderId: "277627035116",
  appId: "1:277627035116:web:bdeff1d943eab63a7634c9",
  measurementId: "G-FX8KCX28E7"
}

if (!firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export {db};