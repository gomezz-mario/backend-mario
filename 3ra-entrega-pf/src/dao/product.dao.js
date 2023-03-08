import Product from './mongo/product.mongo.js';
class UserDao{
	constructor(){
		this.productDao = new Product();
	};
	getProducts = async(limit, page, sort, filters) => {
		return await this.productDao.getProducts(limit, page, sort, filters);
	};
	getProductById = async (id) => {
		return await this.productDao.getProductById(id);
	};
	addProduct = async (productData) => {
		return await this.productDao.addProduct(productData);
	}
	updateProduct = async (productId, productData) => {
		return await this.productDao.updateProduct(productId, productData);
	}
}

export default UserDao;