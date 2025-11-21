import { productsDB, categories } from "./bd.js";

const delay = (ms = 300) => new Promise(res => setTimeout(res, ms));

let db = [...productsDB];

let cartDB = []; 

export const productService = {

  // para obtener categorias
  async getCategories() {
    await delay(100);
    return [...categories];
  },

  // para obtener los productos de cada categoria
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
  },

  async addToCart(item) {
    await delay(150);
    const cartItem = {
      id: Date.now(),
      ...item,
    };
    cartDB.push(cartItem);
    return cartItem;
  },

  async updateCartItem(id, updatedData) {
    await delay(150);
    const index = cartDB.findIndex((i) => i.id === id);
    if (index === -1) throw new Error("Item no encontrado");
    cartDB[index] = { ...cartDB[index], ...updatedData };
    return cartDB[index];
  },

  async deleteCartItem(id) {
    await delay(150);
    const before = cartDB.length;
    cartDB = cartDB.filter((i) => i.id !== id);
    if (cartDB.length === before) throw new Error("Item no encontrado");
    return true;
  },

  async getCart() {
    await delay(150);
    return [...cartDB];
  }
};
