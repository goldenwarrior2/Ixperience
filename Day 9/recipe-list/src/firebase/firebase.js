// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9jZwpLZUGD3ETqSq8t3C1c9Ue96nQooQ",
  authDomain: "recipe-list-695c6.firebaseapp.com",
  projectId: "recipe-list-695c6",
  storageBucket: "recipe-list-695c6.appspot.com",
  messagingSenderId: "475861029234",
  appId: "1:475861029234:web:650f955a5b491eacbb8deb",
  measurementId: "G-7CN861JBXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {
  firestore
}
