import express from "express";
import handlebars from "express-handlebars";
import viewRouter from "./routers/view.router.js";
import __dirname from "./utils.js";

import { productsManager } from "./managers/index.js";

import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(3000, ()=>console.log('Server listening in port 3000'));
const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use('/', viewRouter);

socketServer.on('connection', async(socket) => {
	
	socket.on('add_product',async(product) => {
		await productsManager.saveProduct(product);
		const products = await productsManager.getProducts();
		socketServer.sockets.emit('update_products', products);
	});

	socket.on('delete_product', async(productId) => {
		await productsManager.deleteProduct(productId);
		const products = await productsManager.getProducts();
		socketServer.sockets.emit('update_products', products);
	})

});