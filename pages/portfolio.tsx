import type { NextPage } from 'next'
import Head from 'next/head'
import ProjectDisplayer from '../components/ProjectWrapper/ProjectDisplayer'
import Menu from '../components/Menu/Menu'

const Portfolio: NextPage = () => {
    return (
        <div>
            <Head>
            <title>Niki Hellmers - Portfolio</title>
            <meta name="description" content="Niki Hellmers Personal Website" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Menu/>
                <ProjectDisplayer/>
            </main>
        </div>
    )
  }
  
  export default Portfolio
  