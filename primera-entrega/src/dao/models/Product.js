import { Schema, model } from 'mongoose';

const schema = new Schema({
	'name': {
		type: String,
		required: true
	},
	'short-name': {
		type: String,
		required: true
	},
	'thumnail': {
		type: String,
		//required: true
	}
});

export default model('Product', schema, 'products')