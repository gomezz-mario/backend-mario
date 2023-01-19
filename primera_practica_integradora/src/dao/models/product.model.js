import mongoose from 'mongoose';

const productCollection = 'products';

const productsSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	thumnails: Array
});

const productModel = mongoose.model(productCollection, productsSchema);

export default productModel;