import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Link from 'next/link';
import { MainContainer } from '../styles/components/Main/Main.styled';
import { Container } from '../styles/components/Main/Container.styled';
import Market from '../components/Market/Market';

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
    // <div className={styles.container}>
    <Container>
      <Head>
        <title>Putz</title>
        <meta name="description" content="Putz - Market info and watchlist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Market />
        <div className={styles.grid}>
          <Link href='/market'>
            <a className={styles.card}>
              <h2>Market &rarr;</h2>
              <p>See how the Market is performing and check out the hottest stocks.</p>
            </a>
          </Link>
          <Link href='/options'>
            <a className={styles.card}>
              <h2>Options &rarr;</h2>
              <p>Your very own options chain and dashboard!</p>
            </a>
          </Link>
          <Link href='/about'>
            <a className={styles.card}>
              <h2>Learn More &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
          <Link href='/account'>
            <a
              className={styles.card}
              >
              <h2>Account &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </Link>
        </div>
        <p className={styles.description}>
          Login or {' '}
          <code className={styles.code}>Sign Up</code>
        </p>
      </MainContainer>
    </Container>
  )
}

export default Home
