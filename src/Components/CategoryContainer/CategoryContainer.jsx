import styles from "./CategoryContainer.module.css"

import { useState } from "react";

const categories = [
  {
    name: "Con Alcohol",
    img: "https://i.pinimg.com/1200x/51/eb/08/51eb08cca0f061a8e0b282bf71fdecf4.jpg",
    products: ["Gin Tonic", "Campari", "Fernet"]
  },
  {
    name: "Sin Alcohol",
    img: "https://i.pinimg.com/736x/b6/6c/89/b66c89e226462439c41a202823d005ee.jpg",
    products: ["Limonada", "Coca Cola", "Sprite"]
  },
  {
    name: "Agua, Jugo",
    img: "https://i.pinimg.com/736x/ec/d0/d1/ecd0d19bf34ae071e2f7865d2ae005e1.jpg",
    products: ["Levité", "Glaciar", "Villavicencio"]
  },
  {
    name: "Hielo",
    img: "https://i.pinimg.com/1200x/3e/2c/b8/3e2cb8785c80748cfba06eac1acfc632.jpg",
    products: [ "Hielo", "Eco Vasos"]
  },
  {
    name: "EcoVasos",
    img: "https://i.pinimg.com/736x/f5/07/20/f50720815b0e689ee60d817ac4fe3c50.jpg",
    products: ["Consumicion"]
  },
];


function CategoryContainer({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className={styles.categoryContainer}>
    {!activeCategory ? (
    categories.map((category) => (
        <div  key={category.name} className={styles.categories}>

      <button
      
        onClick={() => setActiveCategory(category)}
        className={styles.grid}
      >
       
        <img src={category.img} className={styles.categoryImg} />
        <div className={styles.content}>
           <h1>{category.name}</h1>

        </div>
        
      </button>
        </div>
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
              {product}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
 export default CategoryContainer;