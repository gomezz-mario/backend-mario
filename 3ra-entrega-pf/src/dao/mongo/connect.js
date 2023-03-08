import mongoose from "mongoose";
import { mongoUrl } from '../../config/config.js';

class Connect{

	static #instance;

	constructor(){
		mongoose.connect(mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true});
	};

	static getInstance = () => {
		if(this.#instance){
			console.log('Already connected!');
			return this.#instance;
		}
		this.#instance = new Connect();
		console.log('Connected!');
		return this.#instance;
	}
}

export default Connect;