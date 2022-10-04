import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Link from 'next/link';
import { MainContainer } from '../styles/components/Main/Container.styled';
import { Main } from '../styles/components/Main/Main.styled';
import { Container } from '../styles/components/Main/Container.styled';
import Market from '../components/Market/Market';
import HomeComponent from '../components/Home/HomeComponent';

const Home: NextPage = () => {
  // Import the functions you need from the SDKs you need
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
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <MainContainer>
      <Head>
        <title>Putz</title>
        <meta name="description" content="Putz - Market info and watchlist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Market />
        <HomeComponent />
      </Main>
      
    </MainContainer>
  )
}

export default Home
