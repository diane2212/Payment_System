import styles from "./CategoryContainer.module.css"

import { useState } from "react";
import { categories } from "../../Data/data";


function CategoryContainer({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className={styles.categoryContainer}>
    {!activeCategory ? (
    categories.map((category) => (


      <button
       key={category.name}
        onClick={() => setActiveCategory(category)}
        className={styles.grid}
      >
       
        <img src={category.img} className={styles.categoryImg} />
        <div className={styles.content}>
           <h1>{category.name}</h1>

        </div>
        
      </button>
     ))
    ) : (
        <div className={styles.products}>
          <button className={styles.backBtn} onClick={() => setActiveCategory(null)}>
            ⬅ Volver
          </button>
          {activeCategory.products.map((product) => (
            <button
              key={product}
              onClick={() => onAddToCart(product)}
              className={styles.productBtn}
            >
              <h1 className={styles.drink}>{product}</h1>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
 export default CategoryContainer;