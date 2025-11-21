import { useParams } from "react-router";
import { useState, useMemo } from "react";
import { productsDB } from "../MOCKS/bd.js";
import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";



export default function ProductDetail() {

  const { id } = useParams();
  const queryClient = useQueryClient();
  const product = productsDB.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");

  const total = useMemo(() => product.price * quantity, [product.price, quantity]);



  if (!product) return <p>Producto no encontrado</p>;


  return (
    <div>
      <Link to="/">⬅ Volver</Link>
      <h1>{product.title}</h1>
      <p>Ingredientes: {product.ingredients}</p>
      <p>Precio unitario: ${product.price}</p>

      <hr />

      <h3>Completa tu pedido:</h3>

      
      <label>
        Cantidad:
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>

      
      <label>
        Comentario:
        <input
          type="text"
          placeholder="ej: de frutos rojos"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>

      
      <p>Total: ${total}</p>

      
      <button>Guardar</button>
    </div>
  );
}
