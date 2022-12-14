const fs = require('fs');
const { parse } = require('path');
const { stringify } = require('querystring');

class ProductManager{
	constructor(path){
		this.idCount = 0;
		this.path = path;
	}

	addProduct(product){
		fs.promises.readFile(this.path, 'utf-8')
		.then(contenido => {
			console.log(contenido);
			let productos = JSON.parse(contenido);
			
			console.log(productos);
			productos.push({id:this.idCount, ...product});

			this.idCount++;

			fs.promises.writeFile(this.path,JSON.stringify(productos))
			.then(()=> console.log('Producto agregado. Archivo actualizado.'))
			.catch(error => console.log(error));
		})
		.catch(error => console.log(error));
	}
	getProducts(){
		fs.promises.readFile(this.path, 'utf-8')
		.then(contenido => JSON.parse(contenido))
		.catch(error => console.log(error));
	}
	getProductById(id){
		fs.promises.readFile(this.path, 'utf-8')
		.then(contenido => {
			let productos = JSON.parse(contenido);
			//return productos.find(prod => prod.id === id);
			let producto = productos.find(prod => prod.id === id);
			console.log(producto);
			return producto;
		})
		.catch(error => console.log(error));
	}
	updateProduct(id, data){
		fs.promises.readFile(this.path, 'utf-8')
		.then(contenido => {
			let productos = JSON.parse(contenido);
			let index = productos.findIndex(prod => prod.id === id);
			let producto = productos.find(prod => prod.id === id);
			productos[index] = {...producto, ...data};
			fs.promises.writeFile(this.path, JSON.stringify(productos))
			.then(()=> console.log('Producto actualizado'));
		})
		.catch(error => console.log(error));
	}

	deleteProduct(id){
		fs.promises.readFile(this.path, 'utf-8')
		.then(contenido => {
			let productos = JSON.parse(contenido);
			console.log("productos todos: ", productos);
			productos = productos.filter(producto => producto.id !== id);
			console.log("productos filtrados: ", productos);
			fs.promises.writeFile(this.path, JSON.stringify(productos))
			.then(()=> console.log('Producto eliminado. Archivo actualizado.'))
			.catch(error => console.log(error));
		})
		.catch(error => console.log(error));
	}
}


const productManager = new ProductManager("./products.json");
productManager.updateProduct(50,{
	price: 10000
})


productManager.addProduct({
	title: "PC",
	description: "Computadora de escritorio",
	price: 40000,
	stock: 20,
	code: 9991,
	thumnail: "Sin imagen"
});

//productManager.deleteProduct(0);
/*
productManager.addProduct({
	title: "Teclado",
	description: "Teclado mec??nico",
	price: 2000,
	stock: 2,
	code: 9992,
	thumnail: "Sin imagen"
});

productManager.addProduct({
	title: "Mouse",
	description: "Mouse ??ptico",
	price: 500,
	stock: 10,
	code: 9993,
	thumnail: "Sin imagen"
});


*/
//productManager.deleteProduct(0);