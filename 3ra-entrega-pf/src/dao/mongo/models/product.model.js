import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
	title: String,
  	description: String,
 	code: Number,
  	price: Number,
  	status: Boolean,
  	stock: Number,
  	thumbnail: String,
})

productSchema.plugin(mongoosePaginate);

export default mongoose.model("products", productSchema);