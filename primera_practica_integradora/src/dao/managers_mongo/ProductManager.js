import productModel from '../models/product.model.js';

class ProductManager{

	getProducts = async () => {
		return await productModel.find().lean();
	};

	getProductById = async(id) => {
		return await productModel.findById(id).lean();
	};

	createNewProduct = async (product) => {
		return await productModel.create({...product});
	};

	updateProduct = () => {};

	deleteProduct = (id) => {
		
	};

}

const productsManager = new ProductManager();

export default productsManager;
