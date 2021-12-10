import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Niki Hellmers</title>
        <meta name="description" content="Niki Hellmers Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.menu}>
            <div className={styles.menu_logo}>
              <a href="">
                <h3>LOGO</h3>
              </a>
            </div>
            <div className={styles.menu_items}>
              <a href="#">Portfolio</a>
              <a href="#">Contact</a>
              <a href="#">GitHub</a>
            </div>
          </div>
          <div className={styles.title}>

          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
