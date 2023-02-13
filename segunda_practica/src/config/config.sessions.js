import appExpress from "../server.js";
import MongoStore from 'connect-mongo';
import session from 'express-session';

const MONGODB_URI = 'mongodb+srv://mario-eccomerce:U6cCAFfyksM66VkU@cluster0.qz30hpp.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'eccomerce';
const SESION_KEY = 'secret'

export default () => {
	appExpress.use(session({
		store: MongoStore.create({
			mongoUrl: MONGODB_URI,
			dbName: DB_NAME,
			mongoOptions: {
				useNewUrlParser: true,
				useUnifiedTopology: true	
			},
			ttl: 30
		}),
		secret: SESION_KEY,
		resave: true,
		saveUninitialized: true
	}));
}