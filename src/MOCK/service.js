import { productsDB, categories } from "./bd.js";

const delay = (ms = 300) => new Promise(res => setTimeout(res, ms));

let db = [...productsDB];

export const productService = {

  // ⭐ OBTENER CATEGORÍAS
  async getCategories() {
    await delay(100);
    return [...categories];
  },

  // ⭐ OBTENER PRODUCTOS POR CATEGORÍA
  getProductsByCategory(categoryId) {
    return new Promise(resolve => {
      const filtered = productsDB.filter(
        (product) => product.category === categoryId
      );
      setTimeout(() => resolve(filtered), 300);
    });
  },

  async getProductById(id) {
    await delay(150);
    const product = db.find((p) => p.id === id);
    if (!product) throw new Error("Producto no encontrado");
    return product;
  },

  async addProduct(newProduct) {
    await delay(150);
    const product = {
      id: Date.now(),
      ...newProduct,
    };
    db.push(product);
    return product;
  },

  async updateProduct(id, updatedData) {
    await delay(150);
    const index = db.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Producto no encontrado");
    db[index] = { ...db[index], ...updatedData };
    return db[index];
  },

  async deleteProduct(id) {
    await delay(150);
    const before = db.length;
    db = db.filter((p) => p.id !== id);
    if (db.length === before) throw new Error("Producto no encontrado");
    return true;
  }
};
