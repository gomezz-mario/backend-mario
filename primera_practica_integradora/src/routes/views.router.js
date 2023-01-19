import { Router } from "express";
import productsManager from "../dao/managers_mongo/ProductManager.js";

const viewRouter = Router();

const product = {
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
	{...product, quantity: 1},
	{...product, quantity: 2},
	{...product, quantity: 3},
	{...product, quantity: 2},
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

viewRouter.get('/product', async(request, response) => {
	response.render('oneproduct', {product});
});

viewRouter.get('/cart', async(request, response) => {
	response.render('mycart', {cart});
});

export default viewRouter;