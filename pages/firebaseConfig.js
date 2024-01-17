// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7UP3hIjcHGyHFyI2nC_e2K91TI3ow97M",
    authDomain: "rajan-23daa.firebaseapp.com",
    projectId: "rajan-23daa",
    storageBucket: "rajan-23daa.appspot.com",
    messagingSenderId: "155790644745",
    appId: "1:155790644745:web:2d669de8c1a32008170ad8",
    measurementId: "G-M4TJSCY39E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
