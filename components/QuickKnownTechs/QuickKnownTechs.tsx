/*
  INFOBOX:

    THIS COMPONENT SHOWS ALL KNOWN TECHNOLOGIES

*/
import styles from './QuickKnownTechs.module.css'
  
function QuickKnownTechs() {
  return (
    <div className={styles.wrapper}>
        <h2>Some of My Expertees include</h2>
        <div className={styles.list}>
            <ul>
                <li>JavaScript/TypeScript</li>
                  <li>||</li>
                <li>C++</li>
                  <li>||</li>
                <li>React/NEXTjs</li>
                  <li>||</li>
                <li>HTML</li>
                  <li>||</li>
                <li>CSS</li>
                  <li>||</li>
                <li>Python</li>
                  <li>||</li>
                <li>Pytorch</li>
            </ul>
        </div>
    </div>
  )
}

export default QuickKnownTechs