import ProductsManager from './ProductManager.js'
import CartsManager from './CartsManager.js';
import __dirname from '../utils.js';

export const productsManager = new ProductsManager(__dirname + '/db/products.json');
export const cartsManager = new CartsManager(__dirname + '/db/carts.json');

