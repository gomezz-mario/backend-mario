import mongoose from 'mongoose';
import {MONGO_USER, MONGO_PASS, CLUSTER_NAME, DB_NAME} from './config.js';

export default (callbackToDBConnected) => {
	
	const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${CLUSTER_NAME}.mongodb.net/?retryWrites=true&w=majority`;
	
	mongoose.set('strictQuery', false);
	mongoose.connect(MONGO_URI, {
		dbName: DB_NAME
	}, (error) => {
		if(error){
			console.log("Ha ocurrido un error en conexión a base de datos: ", error);
			return
		}

		console.log("Conexión a base de datos exitosa.");
		callbackToDBConnected();
	})
}