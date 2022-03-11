import styles from './ContactPopup.module.css'

function Menu() {
    return(
        <div className={styles.menu}>
            <a href="/">
            <div className={styles.menu_logo}></div>
            </a>
            <div className={styles.menu_items}>
                <a href="portfolio">Portfolio</a>
                <a href="">Contact</a>
                <a href="https://github.com/ParaguayanViking" target='_blank'>Github</a>
            </div>
        </div>
    )
}

export default Menu