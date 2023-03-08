export default class CartRepository{
	constructor(cartDao){
		this.cartDao = cartDao;
	}
	createCart = async() => {
		return await this.cartDao.createCart();
	};
	getCartById = async (cartId) => {
		return await this.cartDao.getCartById(cartId)
	};
	getCartDetailsById = async (cartId) => {
		return await this.cartDao.getCartDetailsById(cartId);
	};
	updateCart = async (cartId, products) => {
		return await this.cartDao.updateCart(cartId, products);
	};
	addNewProductOnCart = async (cartId, productId, quantity) => {
		return await this.cartDao.addNewProductOnCart(cartId, productId, quantity);
	};
	addProductOnCart = async (cartId, productId, quantity) => {
		return await this.cartDao.addProductOnCart(cartId, productId, quantity);
	};
	deleteProductOnCart = async (cartId, productId) => {
		return await this.cartDao.deleteProductOnCart(cartId, productId)
	};
	cleanCartById = async (cartId) => {
		return await this.cartDao.cleanCartById(cartId);
	};
	deleteCartById = async (cartId) => {
		return await this.cartDao.deleteCartById(cartId);
	};
}