import type { NextPage } from 'next'
import ProjectDisplayer from '../components/ProjectWrapper/ProjectDisplayer'
import Menu from '../components/Menu/Menu'

const Portfolio: NextPage = () => {
    return (
        <main>
            <Menu/>
            <ProjectDisplayer/>
        </main>
    )
  }
  
  export default Portfolio
  