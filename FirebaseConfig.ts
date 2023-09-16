// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB64kfo0Ivlhv_BckEsTXWX0R5ftoTCjAc",
  authDomain: "compasssales-8248a.firebaseapp.com",
  projectId: "compasssales-8248a",
  storageBucket: "compasssales-8248a.appspot.com",
  messagingSenderId: "939831003330",
  appId: "1:939831003330:web:cca3f437fe27715afbd35b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);