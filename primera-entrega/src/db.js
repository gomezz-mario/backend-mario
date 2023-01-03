import mongoose from 'mongoose';
import { MONGO_DB_URI } from './config.js'

export const connectDB = async () => {
	mongoose.set('strictQuery', true);
	try {
		await mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log('Connected to db')
	} catch (error) {
		console.log(error);
	}
}