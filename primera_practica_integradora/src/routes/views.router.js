import { Router } from "express";
import productsManager from "../dao/managers_mongo/ProductManager.js";
import cartManager from "../dao/managers_mongo/CartsManager.js";

const viewRouter = Router();

viewRouter.get('/', async(request, response) => {
	const products = await productsManager.getProducts();
	//console.log("Products: ", products);

	//console.log({products});
	response.render('products',{products});
});

viewRouter.get('/:id', async(request, response) => {
	try {
		const id = request.params.id;
		const product = await productsManager.getProductById(id);
		response.render('oneproduct', {product});
	} catch (error) {
		console.log("Ha ocurrido un error: ", error);
	}
});

viewRouter.get('/cart/:cid', async(request, response) => {
	try {
		const cid = request.params.cid;
		const cart = await cartManager.getCartById(cid);
		const products = cart.products;
		const mycart = [];
		for(let product of products){
			let detailsProduct = await productsManager.getProductById(product.id);
			mycart.push({...detailsProduct, quantity: product.quantity});
		}	
		response.render('mycart', {cart: mycart});
	} catch (error) {
		console.log("Ha ocurrido un error: ", error);
	}
});

export default viewRouter;