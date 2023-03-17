import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
	products : [
		{
			_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'products',
			},
			quantity: {
				type: Number,
				default: 1
			}
		}
	]
});



export default mongoose.model('carts', cartSchema);