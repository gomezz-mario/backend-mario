import { ProductService } from "../repositories/index.js";
import CustomRouter from "./custom.router.js";

export default class ProductRouter extends CustomRouter{
	init(){
		this.get('/', ["PUBLIC"], async (req, res) => {
			const limit = req.query.limit || 10;
			const page = req.query.page || 1;
			const sort = req.query.sort || 0;
			const filters = Object.entries(req.query)
				.filter(element => element[0]!=='limit' && element[0]!=='page' && element[0]!=='sort')
			const result = await ProductService.getProducts(limit, page, sort, filters);
			if(!result) return res.sendServerError("Error de paginación");
			res.sendSuccess(result);
		});
		this.get('/:pid', ["PUBLIC"], async (req, res) => {
			const { pid } = req.params;
			const product = await ProductService.getProductById(pid);
			if(!product) return res.sendBadRequestError("Producto no encontrado");
			res.sendSuccess(product);
		});
		this.post('/', ["ADMIN"], async (req, res) => {
			const { productData } = req.body;
			await ProductService.addProduct(productData);
			res.sendSuccess("Producto creado");
		});
		this.put('/:pid', ["ADMIN"], async (req, res) => {
			const { pid } = req.params;
			const { productData } = req.body;
			await ProductService.updateProduct(pid, productData);
			res.sendSuccess("Producto actualizado");
		});
		this.delete('/:pid', ["ADMIN"], async (req,res) => {
			const { pid } = req.params;
			await ProductService.deleteProductById(pid);
			res.sendSuccess("Producto eliminado");
		});		
	}
}






