
import styles from "./Header.module.css"

function Header () {
    return (
        <nav className={styles.header}>
           <img className={styles.pic} src="\public\Logo_system.jpeg" alt="Rolling Drinks"/>
           <span className={styles.reloj}>

           </span>

        </nav>
    )

}

export default Header;