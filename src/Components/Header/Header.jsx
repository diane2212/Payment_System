import styles from "./Header.module.css"

function Header () {
    return (
        <nav className={styles.header}>
           <img className={styles.pic} src="\public\Logo_system.jpeg" alt="Rolling Drinks"/>

        </nav>
    )

}

export default Header;