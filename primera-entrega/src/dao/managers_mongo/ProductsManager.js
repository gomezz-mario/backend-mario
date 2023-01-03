import productModel from '../models/Product.js';

class ProductsManager{
	constructor(){};
	getTeams = async() => {
		const products = await productModel.find();
		console.log(products);
	}
}

export default ProductsManager;