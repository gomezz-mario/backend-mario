const fs = require('fs');
const pathFile = "./inventario.json";

class ProductManager{
	constructor(){
		this.path = pathFile;
		if(!fs.existsSync(this.path))
			this.createFile();
	}

	createFile(){
		let data = [];
		fs.promises.writeFile(this.path, JSON.stringify(data))
		.then(()=> console.log("Archivo creado exitosamente."));
	}


	getProducts = async() => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		return JSON.parse(data);
	};

	getProduct = async(id) => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let productos = JSON.parse(data);
		let producto = productos.find(producto => producto.id === id);
		return producto;
	};

	isProductExist = async(id) => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let productos = JSON.parse(data);
		let producto = productos.find(producto => producto.id === id);
		return producto !== undefined;
	}

	addProduct = async(product) => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let productos = JSON.parse(data);
		productos.push(product);
		await fs.promises.writeFile(this.path, JSON.stringify(productos))
		.then(()=> console.log("Producto agregado exitosamente."));
	}

	updateProduct = async(id, data) => {
		let dataFile = await fs.promises.readFile(this.path, 'utf-8');
		let productos = JSON.parse(dataFile);
		let index = productos.findIndex(producto => producto.id === id);
		productos[index] = {...productos[index], ...data, id:id};
		await fs.promises.writeFile(this.path, JSON.stringify(productos))
		.then(()=> console.log("Producto actualizado exitosamente."));
	}

	deleteProduct = async(id) => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let productos = JSON.parse(data);
		productos = productos.filter(producto => producto.id !== id);
		await fs.promises.writeFile(this.path, JSON.stringify(productos))
		.then(()=> console.log("Producto eliminado exitosamente."));
	}
}

class Product{
	constructor(title, description, thumnail, code, price, stock){
		this.id = this.createId();
		this.title = title;
		this.description = description;
		this.thumnail = thumnail;
		this.code = code;
		this.price = price;
		this.stock = stock;
	}

	createId(){
		return Math.random().toString(36).substring(2,18);
	}
}


const pm = new ProductManager();

// ========> SERVIDOR <========
// ========> http://192.168.0.28:8080/ <========


const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/products', async (request, response) => {
	const products = await pm.getProducts();
	const limit = parseInt(request.query.limit);
	if(limit && limit < products.length){
		response.send({products: products.slice(1,limit+1)});
	} else{
		response.send({products});
	}
})

app.get('/product/:pid', async (request, response) => {
	let producto = await pm.getProduct(request.params.pid); 	
	response.send({producto});
})

app.listen(8080, () => {
	console.log("Servidor escuchando en el puerto 8080...")
});
















/*

const pm = new ProductManager();
pm.getProduct("7j8iusrdgow").then((prod)=> console.log(prod));


/*
let p = new Product("Notebook Lenovo V14","Ryzen 3-5300 14, 8GB RAM, 1TB","Sin imagen","889901",125000,3);
pm.addProduct(p).then(() => {
	console.log("Producto agregado exitosamente");
	pm.updateProduct(p.id, {code: "812233"}).then(() => console.log("Producto actualizado exitosamente"));
});
pm.deleteProduct("drp4f03q35q").then(()=> console.log("Producto eliminado"));
*/




 