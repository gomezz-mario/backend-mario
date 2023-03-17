import Product from './mongo/product.mongo.js';
class ProductDao{
	constructor(){
		this.productDao = new Product();
	};
	getProducts = async(limit, page, sort, filters) => {
		return await this.productDao.getProducts(limit, page, sort, filters);
	};
	getProductById = async (productId) => {
		return await this.productDao.getProductById(productId);
	};
	addProduct = async (productData) => {
		return await this.productDao.addProduct(productData);
	}
	updateProduct = async (productId, productData) => {
		return await this.productDao.updateProduct(productId, productData);
	}
	deleteProductById = async (productId) => {
		return await this.productDao.deleteProductById(productId);
	}
}

export default ProductDao;