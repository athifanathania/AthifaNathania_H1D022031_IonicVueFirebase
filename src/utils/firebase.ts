// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9DH5Bwk2btBNXbJAxssHRtkacCn49iAM",
  authDomain: "vue-firebase-89328.firebaseapp.com",
  projectId: "vue-firebase-89328",
  storageBucket: "vue-firebase-89328.firebasestorage.app",
  messagingSenderId: "865148475720",
  appId: "1:865148475720:web:73f98451d0e678d8edfb7d",
  measurementId: "G-T62Q2PWNGN"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };