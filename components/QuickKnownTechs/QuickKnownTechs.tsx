/*
  INFOBOX:

    THIS COMPONENT SHOWS ALL KNOWN TECHNOLOGIES

*/
import styles from './QuickKnownTechs.module.css'
// Styling for the component
  
function QuickKnownTechs() {
  return (
    <div className={styles.wrapper}>
        <h2>Known Techs</h2>
        <div className={styles.list}>
            <ul>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
            </ul>

        </div>
    </div>
  )
}

export default QuickKnownTechs