import { Router } from "express";
import { cartsManager } from "../Managers/index.js";

const cartsRouter = Router();

cartsRouter.post('/', async(request, response) => {
	const cart = await cartsManager.createCart();
	response.send({succes: true, cart});
});
cartsRouter.get('/:cid', async(request, response) => {
	const cartId = request.params.cid;
	const cart = await cartsManager.getCartById(cartId);
	if(!cart){
		return(response.send({succes: false, error: "No se encontro el carrito"}));
	}
	response.send({succes: true, cart});
});
cartsRouter.post('/:cid/product/:pid', async(request, response) => {
	const { cid, pid } = request.params;
	response.send(await cartsManager.addProductToCart(cid, pid));
});
cartsRouter.delete('/:cid', async(request, response) => {
	const cid = request.params.cid;
	response.send(await cartsManager.deleteCart(cid));
});

export default cartsRouter;