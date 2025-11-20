import { Outlet } from 'react-router';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import styles from "./Layout.module.css"

function Layout() {
    const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Header/>
      <div className= {styles.layout}>
        <SideBar cartCount={cartCount} />
      <main className= {styles.content}>
        <Outlet />
      </main>
      </div>
    </>
  );
}

export default Layout;
