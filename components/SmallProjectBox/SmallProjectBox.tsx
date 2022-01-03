import styles from './SmallProjectBox.module.css'

interface SmallProjectBoxInfo {
    key: number;
    imgUrl: string
    title: string
    description: string
    projectUrl: string
}

function SmallProjectBox(props: SmallProjectBoxInfo) {
    return(
        <a href={props.projectUrl} target='_blank'>
            <div className={styles.boxWrapper}>
                <div className={styles.boxText}>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </a>
    )
}

export default SmallProjectBox