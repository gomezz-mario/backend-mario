import { Router } from "express";
import productsManager from "../dao/managers_mongo/ProductManager.js";

const apiRouter = Router();

apiRouter.get('/', async(request, response) => {
	const products =  await productsManager.getProducts();
	response.json(products);
});

apiRouter.post('/', async(request, response) => {
	console.log("metodo POST, body: ",request.body);
	const result = await productsManager.createNewProduct(request.body);
	response.json(result);
})

export default apiRouter;