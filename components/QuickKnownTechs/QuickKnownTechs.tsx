/*
  INFOBOX:

    THIS COMPONENT SHOWS ALL KNOWN TECHNOLOGIES

*/
import styles from './QuickKnownTechs.module.css'
function QuickKnownTechs() {
  return (
    <div className={styles.wrapper}>
        <h2>Some of My Expertise Include</h2>
        <div className={styles.list}>
            <a id={styles["cpp"]} className={styles.box} href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank"></a>
            <a id={styles["js"]} className={styles.box} href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"></a>
            <a id={styles["njs"]} className={styles.box} href="https://en.wikipedia.org/wiki/next.js" target="_blank"></a>
            <a id={styles["py"]} className={styles.box} href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"></a>
            <a id={styles["react"]} className={styles.box} href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank"></a>
            <a id={styles["ts"]} className={styles.box} href="https://en.wikipedia.org/wiki/TypeScript" target="_blank"></a>
        </div>
    </div>
  )
}

export default QuickKnownTechs