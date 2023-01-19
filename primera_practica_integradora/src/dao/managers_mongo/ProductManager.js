import productModel from '../models/product.model.js';

class ProductManager{

	getProducts = async () => {
		return await productModel.find();
	};

	getProductById = () => {};

	createNewProduct = async (product) => {
		return await productModel.create({...product});
	};

	updateProduct = () => {};

	deleteProduct = () => {};

}

const productsManager = new ProductManager();

export default productsManager;
