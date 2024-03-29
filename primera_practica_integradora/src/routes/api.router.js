import { Router } from "express";
import cartManager from "../dao/managers_mongo/CartsManager.js";
import productsManager from "../dao/managers_mongo/ProductManager.js";

const apiRouter = Router();

apiRouter.get('/', async(request, response) => {
	try {
		const products = await productsManager.getProducts();
		response.json(products);		
	} catch (error) {
		console.log("Ha ocurrido un error: ", error);
	}
});

apiRouter.get('/:id', async(request, response) => {
	try {
		const id = request.params.id;
		const product = await productsManager.getProductById(id);
		response.json(product);
	} catch (error) {
		console.log("Ha ocurrido un error: ", error);
	}
});

apiRouter.get('/cart/:cid', async(request, response) => {
	try {
		const id = request.params.cid;
		console.log("carrito id: ",id);
		const cart = await cartManager.getCartById(id);
		response.json(cart);
	} catch (error) {
		console.log("Ha ocurrido un error: ", error);
	}
});

apiRouter.post('/', async(request, response) => {
	const result = await productsManager.createNewProduct(request.body);
	response.json(result);
})

export default apiRouter;