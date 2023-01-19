import express from 'express';
import http from 'http';
import { PORT } from './config.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './routes/views.router.js';
import apiRouter from './routes/api.router.js';

export default () => {
	const app = express();
	const server = http.createServer(app);

	app.engine('handlebars', handlebars.engine());
	app.set('views', __dirname + '/views');
	app.set('view engine', 'handlebars');

	app.use(express.static(__dirname + '/public'));

	app.use(express.json());
	app.use('/', viewRouter);
	app.use('/api', apiRouter);


	return server.listen(PORT);
}



