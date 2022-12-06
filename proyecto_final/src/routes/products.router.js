import { Router } from "express";
import {productsManager} from "../Managers/index.js";

const productsRouter = Router();

productsRouter.get('/', async(request, response) => {
	try {
		const skip = parseInt(request.query.skip);
		const limit = parseInt(request.query.limit);

		const allProducts = await productsManager.getProducts();
		if(!limit || Number.isNaN(limit) || limit < 0){
			return response.send({succes: true, data: allProducts});
		}
		const products = allProducts.slice(skip, skip + limit);
		response.send({succes: true, products: products});
	} catch (error) {
		console.log(error);
		response.send({succes: false, error: "Ha ocurrido un error"});
	}
});
productsRouter.get('/:pid', async(request, response) => {
	try {
		const id  = request.params.pid;
		const product = await productsManager.getProductById(id);
		if(!product){
			return response.send({succes: false, error: "Producto no encontrado"});
		}
		response.send({succes: true, product: product});	
	} catch (error) {
		console.log(error);
		response.send({succes: false, error: "Ha ocurrido un error"});
	}
});
productsRouter.post('/', async(request, response) => {
	try {
		const {title, description, price, code} = request.body;
		if(!title || !description || !price || !code){
			return response.send({succes: false, error: "Campos obligatorios vacíos"});
		}
		const newProduct = await productsManager.saveProduct({title, description, price, code});
		response.send({succes: true, product: newProduct});	
	} catch (error) {
		console.log(error);
		response.send({succes: false, error: "Ha ocurrido un error"});
	}
});
productsRouter.put('/:pid', async(request, response) => {
	try {
		const id = request.params.pid;
		const isProdExist = await productsManager.isProductExist(id);
		if(!isProdExist){
			return request.send({succes: false, error: "Producto no encontrado"});
		}
		const data = request.body;
		const updateProd = await productsManager.updateProduct({id, data});
		console.log("Update product: ",updateProd);
		response.send({succes: true, product: updateProd});	
	} catch (error) {
		console.log(error);
		response.send({succes: false, error: "Ha ocurrido un error"});
	}
});
productsRouter.delete('/:pid', async(request, response) => {
	try {
		const id = request.params.pid;
		const isProdExist = await productsManager.isProductExist(id);
		if(!isProdExist){
			return response.send({succes: false, error: "Producto no encontrado"});
		}
		const deleteProd = await productsManager.deleteProduct(id);
		response.send({succes: true, product: deleteProd});	
	} catch (error) {
		console.log(error);
		response.send({succes: false, error: "Ha ocurrido un error"});
	}
});


export default productsRouter; 