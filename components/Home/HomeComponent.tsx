import { HomeContainer } from '../../styles/components/Home/Home.styled'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function HomeComponent() {
  return (
    <HomeContainer>
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
    </HomeContainer>
  )
}