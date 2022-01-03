import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu/Menu'
import SimpleBoxInfo from '../components/SimpleBoxInfo/SimpleBoxInfo'
import QuickKnownTechs from '../components/QuickKnownTechs/QuickKnownTechs'

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
          <Menu/>
          <div className={styles.title}>
            <h1>Nicholas Hellmers</h1>
            <h2>Software Developer</h2>
          </div>
          <div className={styles.spacer_header}></div>
        </div>
        <SimpleBoxInfo 
        title={'About this website'} 
        info={"Hi, this is the brief overview to my personal website. This homepage supports a summary of all the stuff that I've done so far. I you'd like to see my projects more in detail, click the portfolio button up on the menu."}
        />
        <QuickKnownTechs/>
        <div className={styles.info2Wrapper}>
          <h2>My Background</h2>
          <div className={styles.info2}>
          <SimpleBoxInfo 
          title={''}
          info={"Hi, this is the brief overview to my personal website. This homepage supports a summary of all the stuff that I've done so far. I you'd like to see my projects more in detail, click the portfolio button up on the menu."}
          />
          <SimpleBoxInfo 
          title={''} 
          info={"Hi, this is the brief overview to my personal website. This homepage supports a summary of all the stuff that I've done so far. I you'd like to see my projects more in detail, click the portfolio button up on the menu."}
          />
          </div>
        </div>
      <footer className={styles.footer}>
        <h1>footer</h1>
      </footer>
      </main>

    </div>
  )
}

export default Home
