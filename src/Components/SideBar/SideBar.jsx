import styles from "./SideBar.module.css"

import { LogOut, UserCog, CalendarSearch , Wine} from "lucide-react";



function SideBar({ cartCount }) {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.MsjHello}>Hola, Usuario!
        <button className={styles.userbutton}>
          <UserCog className={styles.user} />
        </button>
        <button label="Exit">
       <LogOut className={styles.ExitIcon}/>
      </button>
      </div>
      <div>
        <CalendarSearch className={styles.LogoLucide}/>
        <button className={styles.typeButton}>
          <h2 className={styles.SectionsName}>Registro de Ventas</h2>
        </button>
      </div>
      <div>
         <Wine className={styles.LogoLucide} />
        <button className={styles.typeButton}>
          <h2 className={styles.SectionsName}>Carrito</h2>
       </button>
        <span className={styles.cartBadge}>{cartCount}</span>
      </div>
      <div>
        <button className={styles.typeButton}>
          <h1 className={styles.SectionsName} >Control de Stock</h1>
        </button>
      </div>
      <div>
        <button className={styles.typeButton}>
          <h1 className={styles.SectionsName}>Caja</h1>
        </button>
      </div>
      <div>
        <button className={styles.typeButton}>
          <h1 className={styles.SectionsName}>Calculadora</h1>
        </button>
      </div>
      <div>
        <button className={styles.typeButton}>
          <h1 className={styles.SectionsName}>Impresora</h1>
        </button>
      </div>

      
    </aside>
  );
  }
  
  export default SideBar;
