// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0gsxnhRY-VquhXtuKaUvLZc3SSTiPiUM",
  authDomain: "oddam-ef0ab.firebaseapp.com",
  projectId: "oddam-ef0ab",
  storageBucket: "oddam-ef0ab.appspot.com",
  messagingSenderId: "696401776246",
  appId: "1:696401776246:web:3a4b5142082c57a54d1957",
  measurementId: "G-QE94JMECNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };