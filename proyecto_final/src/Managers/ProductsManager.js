import fs from 'fs';

class ProductsManager{
	constructor(path){
		this.path = path;
		this.#init();
	}
	#init = async() => {
		try {
			const existFile = fs.existsSync(this.path);
			if(existFile) return
			fs.writeFileSync(this.path, JSON.stringify([]));
		} catch (error) {
			console.log(error);
		}
	}
	#createNewId(){
		return Math.random().toString(36).substring(2,18);
	}
	saveProduct = async(product) => {
		const newProduct = {...product};
		const products = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
		const existCodeInProducts = products.some(prod => prod.code === newProduct.code);
		if(existCodeInProducts){
			return {error: "El codigo no se puede repetir"};
		}
		newProduct.id = this.#createNewId();
		products.push(newProduct);
		fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
		return newProduct;
	}
	getProducts = async() => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let products = JSON.parse(data);
		return products;
	}
	getProductById = async(id) => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let products = JSON.parse(data);
		let product = products.find(prod => prod.id === id);
		return product;
	}
	isProductExist = async(id) => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let products = JSON.parse(data);
		return products.some(prod => prod.id === id);
	}
	updateProduct = async({id, data}) => {
		let response = await fs.promises.readFile(this.path, 'utf-8');
		let products = JSON.parse(response);
		let index = products.findIndex(prod => prod.id === id);
		products[index] = {...products[index], ...data, id};
		fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
		return products[index];
	}
	getStockProduct = async(id) => {
		const product = await this.getProductById(id);
		if(!product){
			return 0;
		}
		return product.stock;
	}
	addStockProduct = async(id, units) => {
		const products = await this.getProducts();
		const productIndex = products.findIndex(product => product.id === id);
		if(!productIndex < 0){
			const stock = products[productIndex].stock;
			products[productIndex] = stock + units;
			await fs.promises.writeFile(this.path, JSON.stringify(products, null, 3));
		}
	}
	putStockProduct = async(id) => {
		const products = await this.getProducts();
		const productIndex = findIndex(product => product.id === id);
		if(!productIndex < 0){
			const stock = products[productIndex].stock;
			if(stock > 0){
				products[productIndex] = stock - 1;
				await fs.promises.writeFile(this.path, JSON.stringify(products, null, 3));
			}
		}
	}

	deleteProduct = async(id) => {
		let data = await fs.promises.readFile(this.path, 'utf-8');
		let products = JSON.parse(data);
		products = products.filter(prod => prod.id !== id);
		fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
	}
}

export default ProductsManager;