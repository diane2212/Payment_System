import styles from "./SideBar.module.css"


function SideBar({ cartCount }) {
  return (
    <aside className={styles.sidebar}>
      <p className={styles.text}>Hola, Usuario! </p>
      
      <button className={styles.iconButton}>Mi Perfil</button>
      <hr className={styles.lines}/>
      <button className={styles.iconButton}>Mis Ventas</button>
      <hr className={styles.lines}/>

      <button className={styles.iconButton} aria-label="Carrito">
        Carrito
        <span className={styles.cartBadge}>{cartCount}</span>
     </button>
     <hr/>

        <div>

         <p className={styles.clock}>{new Date().toLocaleString()}</p>
        </div>
      
        <button className={styles.exit}>Cerrar Sesion</button>
    </aside>
  );
  }
  
  export default SideBar;