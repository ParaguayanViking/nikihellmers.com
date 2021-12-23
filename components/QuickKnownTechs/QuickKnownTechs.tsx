/*
  INFOBOX:

    THIS COMPONENT SHOWS ALL KNOWN TECHNOLOGIES

*/
import styles from './QuickKnownTechs.module.css'
  
function QuickKnownTechs() {
  return (
    <div className={styles.wrapper}>
        <h2>Known Techs</h2>
        <div className={styles.list}>
            <ul>
                <li>JavaScript/TypeScript</li>
                <li>C++</li>
                <li>React/NEXTjs</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
            </ul>
        </div>
    </div>
  )
}

export default QuickKnownTechs