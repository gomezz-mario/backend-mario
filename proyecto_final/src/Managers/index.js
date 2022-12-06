import ProductsManager from './ProductsManager.js'
import CartsManager from './CartsManager.js';
export const productsManager = new ProductsManager('../src/db/products.json');
export const cartsManager = new CartsManager('../src/db/carts.json');

