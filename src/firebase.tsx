// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import "firebase/auth"
import {getFirestore} from "firebase/firestore";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoL2deObwmHc4U4TSxtAV1JUdoe8qNMgM",
  authDomain: "sunstat-ver-27-11-23.firebaseapp.com",
  databaseURL: 'https://sunstat-ver-27-11-23-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: "sunstat-ver-27-11-23",
  storageBucket: "sunstat-ver-27-11-23.appspot.com",
  messagingSenderId: "542118213589",
  appId: "1:542118213589:web:4dcecc19c8560ba078ef5c",
  measurementId: "G-P1CY414NCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const rdb = getDatabase(app);