import styles from './Menu.module.css'

function Menu() {
    return(
        <div className={styles.menu}>
            <a href="/">
            <div className={styles.menu_logo}></div>
            </a>
            <div className={styles.menu_items}>
                <a href="portfolio">Portfolio</a>
                <a href="">Contact</a>
                <a href="https://github.com/ParaguayanViking" target='_blank'>GitHub</a>
            </div>
        </div>
    )
}

export default Menu