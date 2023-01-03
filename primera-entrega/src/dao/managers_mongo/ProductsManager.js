import productModel from '../models/Product.js';

class ProductsManager{
	constructor(){};
	getProducts = async() => {
		const products = await productModel.find();
		console.log(products);
	}
}

export default ProductsManager;