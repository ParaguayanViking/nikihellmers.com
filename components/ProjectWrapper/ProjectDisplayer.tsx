import SmallProjectBox from "../SmallProjectBox/SmallProjectBox"
import styles from './ProjectDisplayer.module.css'

let infoArray: any = []

for(let i: number = 0; i < 10; i++) {
    infoArray.push(<SmallProjectBox
        key={i}
        imgUrl="img"
        title="title"
        description="desc"
        projectUrl="https://www.google.com/"
        />)
}

function ProjectDisplayer() {
    return(
        <div className= {styles.displayerWrapper}>
            {infoArray}
        </div>
    )
}

export default ProjectDisplayer