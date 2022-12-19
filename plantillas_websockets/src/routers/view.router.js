import { Router } from "express";
import { productsManager } from "../managers/index.js";


const viewRouter = Router();

viewRouter.get('/', async(request, response) => {
	const products =  await productsManager.getProducts();
	response.render('home', {products});
});

viewRouter.get('/realtimeproducts', async(request, response) => {
	const products =  await productsManager.getProducts();
	response.render('realtimeproducts', {products});
});

export default viewRouter;