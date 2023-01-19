import { Router } from "express";
import productsManager from "../dao/managers_mongo/ProductManager.js";

const viewRouter = Router();

const producttt = {
	name: "Mesa",
	price: 2000,
	description: "soy la descripcion del producto",
	img: "https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_S21_Fe_Gris_Frente_min_2d6f1d0629.png",
	thumbnails: [
		"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_S21_Fe_Gris_Frente_min_2d6f1d0629.png",
		"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_S21_Fe_Gris_Frente_min_2d6f1d0629.png",
		"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_S21_Fe_Gris_Frente_min_2d6f1d0629.png",
		"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_S21_Fe_Gris_Frente_min_2d6f1d0629.png",
	]
}

const cart = [
	{...producttt, quantity: 1},
	{...producttt, quantity: 2},
	{...producttt, quantity: 3},
	{...producttt, quantity: 2},
]

/*
const products = [
	product,
	product,
	product,
	product,
]*/

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

viewRouter.get('/cart', async(request, response) => {
	response.render('mycart', {cart});
});

export default viewRouter;