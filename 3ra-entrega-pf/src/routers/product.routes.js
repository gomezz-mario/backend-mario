import { Router } from "express";
import { ProductService } from "../repositories/index.js";

const router = Router();


router.get('/', async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const sort = req.query.sort || 0;
	const filters = Object.entries(req.query)
		.filter(element => element[0]!=='limit' && element[0]!=='page' && element[0]!=='sort')
	const result = await ProductService.getProducts(limit, page, sort, filters);
	res.json(result)
})

router.get('/:pid', async (req, res) => {
	const { id } = req.params;
	const result = await ProductService.getProductById(id);
	res.status(200).json({status: 'succsess', product: result})
});
router.post('/', async (req, res) => {
	const { productData } = req.body;
	await ProductService.addProduct(productData);
	res.json({status: 'succsess'})
});

router.put('/:pid', async (req, res) => {
	const { pid } = req.params;
	const { productData } = req.body;
	await ProductService.updateProduct(pid, productData);
	res.json({status: 'succsess'})
});

export default router;