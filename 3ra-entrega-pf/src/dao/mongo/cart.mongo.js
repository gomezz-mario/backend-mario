import Connect from './connect.js';
import CartModel from './models/cart.model.js';

class Cart{
	constructor(){
		Connect.getInstance();
	};
	createCart = async() => {
		return await CartModel.create({products: []});
	};
	getCartById = async (cartId) => {
		return await CartModel.findById(cartId);
	};
	getCartDetailsById = async (cartId) => {
		return (await CartModel.findById(cartId)).populate('products_id');
	};
	
	addNewProductOnCart = async (cartId, productId, quantity) => {
		const productsOnCart = (await CartModel.findById(cartId)).products;
		productsOnCart.push({_id: productId, quantity});
		return await CartModel.findByIdAndUpdate(cartId, { products: productsOnCart });
	};
	addProductOnCart = async (cartId, productId, quantity) => {
		const cart = await CartModel.findById(cartId);
		const productsOnCart = cart.products;
		const product = productsOnCart.find(product => product.id === productId);
		if(product){
			product.quantity = quantity;
			return await CartModel.findByIdAndUpdate(cartId, { products: productsOnCart });
		}
		return cart;
	};
	updateCart = async (cartId, products) => {
		return await CartModel.findByIdAndUpdate(cartId, {products});
	};
	cleanCartById = async (cartId) => {
		return await CartModel.findByIdAndUpdate(cartId, {products: []});
	};
	deleteProductOnCart = async (cartId, productId) => {
		const cart = await CartModel.findById(cartId);
		const products = cart.products.filter(product => product.id !== productId);;
		return await CartModel.findByIdAndUpdate(this.cart.id, {products});
	};
	deleteCartById = async (cartId) => {
		return await CartModel.findByIdAndDelete(cartId);
	};
}


export default Cart;