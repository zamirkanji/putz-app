// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFh7XJHGuDeGMzKH4B0BiAxUy6baf9cCI",
    authDomain: "pootz-app.firebaseapp.com",
    projectId: "pootz-app",
    storageBucket: "pootz-app.appspot.com",
    messagingSenderId: "716194739887",
    appId: "1:716194739887:web:936f5424a9e5f974d8065a",
    measurementId: "G-NE4T1LCYWL"
  };
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  // const analytics = getAnalytics(app);