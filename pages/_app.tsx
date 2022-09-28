import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg_mdDs6Mnqpg2flY53eegSxsNFB971WE",
  authDomain: "putz-app.firebaseapp.com",
  projectId: "putz-app",
  storageBucket: "putz-app.appspot.com",
  messagingSenderId: "400459141438",
  appId: "1:400459141438:web:54ef6a7b38af5c1cbd1c6f",
  measurementId: "G-YLSHVSY43J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
