import { Router } from "express";
import { CartService, TicketService, ProductService } from "../repositories/index.js";

const router = Router();

router.get('/:cid', async (req,res) => {
	const cid = req.params.cid;
	const result = await CartService.getCartById(cid);
	res.json({status: 'success', result});
});
router.put('/:cid', async (req,res) => {
	const cid = req.params.cid;
	const { products } = req.body;
	const result = await CartService.updateCart(cid, products);
	res.json({status: 'success', result});
});
router.put('/:cid/product/:pid', async (req,res) => {
	const { cid, pid } = req.params;
	const quantity = req.body.quantity;
	const result = await CartService.addNewProductOnCart(cid, pid, quantity);
	res.json({status: 'success', result});
});

router.post('/create', async (req,res) => {
	const result = await CartService.createCart();
	res.json({status: 'succsess', result});
});
router.post('/:cid/purchase', async (req,res) => {
	const { cid } = req.params;
	const user = req.session.user;
	//Busca el carrito por Id
	const cart = await CartService.getCartById(cid);
	//Genero una compra con los productos del carrito de los que tengo stock
	const purchase = cart.map(async product => {
		const stock = (await ProductService.getProductById(product.id));
		if(stock >= product.quantity){
			await ProductService.updateProduct(product.id, {stock: stock - quantity});
			return product;
		}
	});
	//Genero el ticket de la compra
	const ticket = await TicketService.createTicket(user, purchase);
	//Dejo en el carrito los productos que no pudieron ser comprados por falta de stock
	cart = cart.filter(product => purchase.includes(product));
	res.status(200).json({cart, ticket});
});
router.delete('/:cid', async (req,res) => {
	const cid = req.params.cid;
	const result = await CartService.cleanCartById(cid);
	res.json({status: 'succsess', result});
});
router.delete('/:cid/product/:pid', async (req,res) => {
	const {cid, pid} = req.params;
	const result = await CartService.deleteProductOnCart(cid, pid);
	res.json({status: 'succsess', result});
});

export default router;