import { port } from './config/config.js';
import express from 'express';
import session from 'express-session';
import { productRouter, cartRouter, userRouter } from './routers/index.routes.js';
import passport from 'passport';
import initializePassport from './passport/passport.config.js';
import { mongoUrl } from './config/config.js';
import MongoStore from 'connect-mongo';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
	store: MongoStore.create({
		mongoUrl,
		dbName: 'ecommerce',
		mongoOptions: {
			useNewUrlParser: true,
			useUnifiedTopology: true	
		},
		ttl: 3000
	}),
	secret: '123456',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
initializePassport();
app.use('/api/user', userRouter.getRouter());
app.use('/api/product', productRouter.getRouter());
app.use('/api/cart', cartRouter.getRouter());
app.listen(port);
console.log('server listen on port ', port);

