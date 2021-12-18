import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface SimpleInformation {
  title: string;
  info: string;
}

function InfoBox(props: SimpleInformation) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  )
}

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
            <a href="">
            <div className={styles.menu_logo}></div>
            </a>
            <div className={styles.menu_items}>
              <a href="portfolio">Portfolio</a>
              <a href="">Contact</a>
              <a href="">GitHub</a>
            </div>
          </div>
          <div className={styles.title}>
            <h1>Nicholas Hellmers</h1>
            <h2>Software Developer</h2>
          </div>
          <div className={styles.spacer_header}></div>
        </div>
        <body>
          <InfoBox title={'hello'} info={'hello 2'}/>
        </body>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
