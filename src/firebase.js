// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCVJkVVtFXggPcO0EqCqiJvU32ohHW1rWA",
  authDomain: "web-kelas-4022e.firebaseapp.com",
  projectId: "web-kelas-4022e",
  storageBucket: "web-kelas-4022e.appspot.com",
  messagingSenderId: "618604514001",
  appId: "1:618604514001:web:47e112ce791420868413f0",
  measurementId: "G-6F7L31PY58"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();