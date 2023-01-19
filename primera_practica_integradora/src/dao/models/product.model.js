import mongoose from 'mongoose';

const productCollection = 'products';

const productsSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	thumbnails: Array,
	image: String
});

const productModel = mongoose.model(productCollection, productsSchema);

export default productModel;