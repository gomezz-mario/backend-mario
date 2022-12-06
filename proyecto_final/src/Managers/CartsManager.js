import fs from 'fs';
import {productsManager} from './index.js';

class CartsManager{
	constructor(path){
		this.path = path;
		this.#init();
	}
	#init(){
		try {
			const existFile = fs.existsSync(this.path);
			if(existFile) return
			fs.writeFileSync(this.path, JSON.stringify([]));
		} catch (error) {
			console.log(error);
		}
	}
	#createNewId(){
		return Math.random().toString(36).substring(2,18);
	}
	#getAllCarts = async() => {
		const data = await fs.promises.readFile(this.path, 'utf-8');
		return JSON.parse(data);
	}
	createCart = async() => {
		const carts = await this.#getAllCarts();
		const newCart = {
			id: this.#createNewId(),
			products: []
		}
		carts.push(newCart);
		await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 3));
		return newCart;
	}
	getCartById = async(cartId) => {
		const carts = await this.#getAllCarts();
		return carts.find(cart => cart.id === cartId);
	}
	addProductToCart = async(cartId, productId) => {
		const carts = await this.#getAllCarts();
		const cartIndex = carts.findIndex(cart => cart.id === cartId);
		if(cartIndex < 0){
			return({succes: false, error: "Carrito no encontrado"});
		}
		const product = await productsManager.getProductById(productId);
		if(!product){
			return({succes: false, error: "Producto no encontrado"});
		}

		if(!product.stock > 0){
			return({succes: false, error: "No hay stock del producto"});
		}

		const productInCartIndex = carts[cartIndex].products.findIndex(prod => prod.id === productId);
		if(productInCartIndex < 0){
			const addProduct = {id: productId, quantity: 1};
			carts[cartIndex].products.push(addProduct);
		} else{
			carts[cartIndex].products[productInCartIndex].quantity++;
		}
		
		await productsManager.updateProduct({id:productId,data:{stock: product.stock-1}});		
		
		await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 3));

		return {succes: true, carrito: carts[cartIndex]};
	}
	
}

export default CartsManager;