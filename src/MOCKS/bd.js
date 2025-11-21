// src/MOCK/bd.js

export const productsDB = [
  { id: 1, title: "Gin Tonic", price: 3500, category: "con-alcohol", ingredients: "Agua Tonica, Gin" },
  { id: 2, title: "Campari", price: 3500, category: "con-alcohol", ingredients: "Campari, jugo de naranja" },
  { id: 3, title: "Fernet", price: 3500, category: "con-alcohol", ingredients: "Fernet Branca, Coca Cola" },
  { id: 4, title: "Caipiriña", price: 3500, category: "con-alcohol", ingredients: "Cachaza, macerado de limon, hielo" },
  { id: 5, title: "Caipiroska", price: 3500, category: "con-alcohol", ingredients: "Vodka, macerado de limon, hielo" },

  { id: 13, title: "Limonada", price: 3000, category: "sin-alcohol", ingredients: "Jugo de limon, Menta, Jengibre" },
  { id: 14, title: "Coca Cola", price: 2500, category: "sin-alcohol", ingredients: "--" },

  { id: 19, title: "Agua C/Gas", price: 2500, category: "jugos-agua", ingredients: "--" },

  { id: 24, title: "Hielo", price: 1500, category: "hielo", ingredients:"--" },
  { id: 29, title: "Consumicion", price: 4000, category: "otros", ingredients:"--" }
];

export const categories = [
  { id: "con-alcohol", name: "Con Alcohol", img: "https://i.pinimg.com/1200x/51/eb/08/51eb08cca0f061a8e0b282bf71fdecf4.jpg" },
  { id: "sin-alcohol", name: "Sin Alcohol", img: "https://i.pinimg.com/736x/b6/6c/89/b66c89e226462439c41a202823d005ee.jpg" },
  { id: "jugos-agua", name: "Jugos y Agua", img: "https://i.pinimg.com/736x/ec/d0/d1/ecd0d19bf34ae071e2f7865d2ae005e1.jpg" },
  { id: "hielo", name: "Hielo",  img: "https://i.pinimg.com/1200x/3e/2c/b8/3e2cb8785c80748cfba06eac1acfc632.jpg"},
  { id: "otros", name: "Otros",  img: "https://i.pinimg.com/736x/f5/07/20/f50720815b0e689ee60d817ac4fe3c50.jpg"}
];
 