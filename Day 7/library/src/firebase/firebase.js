// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0w6Wn6zreRWmjNVByuAn18XJ8pUnAClg",
  authDomain: "book-library-2d97a.firebaseapp.com",
  projectId: "book-library-2d97a",
  storageBucket: "book-library-2d97a.appspot.com",
  messagingSenderId: "648331333131",
  appId: "1:648331333131:web:a3a7fff4966c1f7757010e",
  measurementId: "G-BW6YWWQ8F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// get the firestore database and pass it app which is linked to our firebaseconfig
const firestore = getFirestore(app);

export {
  firestore
}