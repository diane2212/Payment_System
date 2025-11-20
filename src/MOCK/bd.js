// src/MOCK/bd.js

export const productsDB = [
  { id: 1, title: "Gin Tonic", price: 0, category: "con-alcohol" },
  { id: 2, title: "Campari", price: 0, category: "con-alcohol" },
  { id: 3, title: "Fernet", price: 0, category: "con-alcohol" },
  { id: 4, title: "Caipiriña", price: 0, category: "con-alcohol" },
  { id: 5, title: "Caipiroska", price: 0, category: "con-alcohol" },

  { id: 13, title: "Limonada", price: 0, category: "sin-alcohol" },
  { id: 14, title: "Coca Cola", price: 0, category: "sin-alcohol" },

  { id: 19, title: "Agua C/Gas", price: 0, category: "jugos-agua" },

  { id: 24, title: "Hielo", price: 0, category: "hielo" },
  { id: 29, title: "Consumicion", price: 0, category: "otros" }
];

export const categories = [
  { id: "con-alcohol", name: "Con Alcohol", img: "https://i.pinimg.com/1200x/51/eb/08/51eb08cca0f061a8e0b282bf71fdecf4.jpg" },
  { id: "sin-alcohol", name: "Sin Alcohol", img: "https://i.pinimg.com/736x/b6/6c/89/b66c89e226462439c41a202823d005ee.jpg" },
  { id: "jugos-agua", name: "Jugos y Agua", img: "https://i.pinimg.com/736x/ec/d0/d1/ecd0d19bf34ae071e2f7865d2ae005e1.jpg" },
  { id: "hielo", name: "Hielo",  img: "https://i.pinimg.com/1200x/3e/2c/b8/3e2cb8785c80748cfba06eac1acfc632.jpg"},
  { id: "otros", name: "Otros",  img: "https://i.pinimg.com/736x/f5/07/20/f50720815b0e689ee60d817ac4fe3c50.jpg"}
];
 