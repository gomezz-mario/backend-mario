export default class ProductRepository{
	constructor(productDao){
		this.productDao = productDao;
	};
	getProductById = async(id) => {
		return await this.productDao.getProductById(id);
	};
	addProduct = async (productData) => {
		return await this.productDao.addProduct(productData);
	};
	updateProduct = async (productId, productData) => {
		return await this.productDao.updateProduct(productId, productData);
	};
	getProducts = async (limit, page, sort, filters) => {
		return await this.productDao.getProducts(limit, page, sort, filters);
	}
}