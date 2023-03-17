import Cart from "./mongo/cart.mongo.js";

class CartDao{
	constructor(){
		this.cart = new Cart();
	}
	createCart = async() => {
		return await this.cart.createCart();
	};
	getCartById = async (cartId) => {
		return await this.cart.getCartById(cartId)
	};
	getCartDetailsById = async (cartId) => {
		return await this.cart.getCartDetailsById(cartId);
	};
	addNewProductOnCart = async (cartId, productId, quantity) => {
		return await this.cart.addNewProductOnCart(cartId, productId, quantity);
	};
	addProductOnCart = async (cartId, productId, quantity) => {
		return await this.cart.addProductOnCart(cartId, productId, quantity);
	};
	updateCart = async (cartId, products) => {
		return await this.cart.updateCart(cartId, products);
	};

	cleanCartById = async (cartId) => {
		return await this.cart.cleanCartById(cartId);
	};
	deleteProductOnCart = async (cartId, productId) => {
		return await this.cart.deleteProductOnCart(cartId, productId)
	};
	deleteCartById = async (cartId) => {
		return await this.cart.deleteCartById(cartId);
	};
}

export default CartDao;