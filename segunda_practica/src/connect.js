import mongoose from 'mongoose';

const MONGODB_URI='mongodb+srv://mario-eccomerce:U6cCAFfyksM66VkU@cluster0.qz30hpp.mongodb.net/?retryWrites=true&w=majority'

export default () => {
	mongoose.set("strictQuery", false);
	return mongoose.connect(MONGODB_URI, {dbName: 'eccomerce'});
}