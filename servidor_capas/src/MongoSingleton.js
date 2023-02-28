import mongoose from 'mongoose';
import dotenv from 'dotenv';

export default class MongoSingleton{

	static #instance;
	
	constructor(){
		dotenv.config();
		mongoose.set("strictQuery", false);
		mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true, 
			useUnifiedTopology: true,
			dbName: 'ecommerce',
		});
	}
	static getInstance = () => {
		if(this.#instance){
			console.log('Already connected!');
			return this.#instance;
		}
		
		this.#instance = new MongoSingleton();
		console.log('Connected!')
		return this.#instance;
	}
}