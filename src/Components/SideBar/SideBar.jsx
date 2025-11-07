import styles from "./SideBar.module.css"
import Clock from "./Clock";
import { LogOut, UserCog, CalendarSearch , Wine} from "lucide-react";



function SideBar({ cartCount }) {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.MsjHello}>Hola, Usuario!
        <button className={styles.userbutton}>
          <UserCog className={styles.user} />
        </button>
      </div>
      <div>
        <CalendarSearch className={styles.LogoLucide}/>
        <button className={styles.typeButton}>
          <h2 className={styles.SectionsName}>Registro de Ventas</h2>
        </button>
      </div>
        <Wine className={styles.LogoLucide} />
      <button className={styles.typeButton}>
        <h2 className={styles.SectionsName}>Carrito</h2>
        <span className={styles.cartBadge}>{cartCount}</span>
     </button>

      <Clock/>
      <button className={styles.typeButton} label="Exit">
       <LogOut className={styles.ExitIcon}/>
      </button>
    </aside>
  );
  }
  
  export default SideBar;
