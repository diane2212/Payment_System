/*import { useState } from "react";
import Header from "../Components/Header/Header";
import CategoryContainer from "../Components/CategoryContainer/CategoryContainer";
import styles from "./App.module.css"
import SideBar from "../Components/SideBar/SideBar";

function App() {
   const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
    setCartCount((prev) => prev + 1); // valor anterior
  };


  return (
    <>
      <Header />
      <main className={styles.div}>
        <SideBar cartCount={cartCount} />
        <CategoryContainer onAddToCart={handleAddToCart} />
      </main>
    </>
  );

 
}
export default App;
*/