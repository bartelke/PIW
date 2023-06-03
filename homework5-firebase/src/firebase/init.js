// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeFuubu59VQLN4XL-IULvIFfuly9e9A2A",
  authDomain: "piw-todo-list.firebaseapp.com",
  projectId: "piw-todo-list",
  storageBucket: "piw-todo-list.appspot.com",
  messagingSenderId: "132506049096",
  appId: "1:132506049096:web:23e34fed1ba927d1c2567d",
  measurementId: "G-FJ1HQJV15N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);