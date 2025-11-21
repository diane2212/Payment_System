import styles from "./CategoryContainer.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { productService } from "../../MOCKS/service";


function CategoryContainer() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const {
    data: categories,
    isLoading: loadingCat,
    error: errorCat
  } = useQuery({
    queryKey: ["categories"],
    queryFn: productService.getCategories,
  });

  const {
    data: products,
    isLoading: loadingProd,
    error: errorProd,
  } = useQuery({
    queryKey: ["products", activeCategory?.id],
    queryFn: () => productService.getProductsByCategory(activeCategory.id),
    enabled: !!activeCategory,
  });

  // mensaje de cargando y error en categorias
  if (loadingCat) return <p>Cargando categorías...</p>;
  if (errorCat || !categories) return <p>Error cargando categorías</p>;

  return (
    <div className={styles.categoryContainer}>
      {!activeCategory ? (
        categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat)}
            className={styles.grid}
          >
            <img src={cat.img} className={styles.categoryImg} />
            <div className={styles.content}>
            <h1>{cat.name}</h1>

            </div>
          </button>
        ))
      ) : (
        <div className={styles.products}>
          <button onClick={() => setActiveCategory(null)}>⬅ Volver</button>

          {loadingProd && <p>Cargando productos...</p>}
          {errorProd && <p>Error cargando productos...</p>}

          {products?.map((product) => (
            <button
              key={product.id}
              className={styles.productBtn}
              onClick={() => navigate(`/products/${product.id}`)}
              
            >
             
              <h1  className={styles.drink}>{product.title}</h1>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryContainer;


