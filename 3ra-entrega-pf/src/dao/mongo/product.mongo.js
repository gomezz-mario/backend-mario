import ProductModel from "./models/product.model.js";
import Connect from "./connect.js";

class Product{
	constructor(){
		Connect.getInstance();
	};
	getProductById = async (id) => {
		return await ProductModel.findById(id);
	};
	addProduct = async (productData) => {
		return await ProductModel.create(productData);	
	};
	updateProduct = async (productId, productData) => {
		return await ProductModel.findByIdAndUpdate(productId, productData);
	};

	getProducts = async (limit, page, sort, filters) => {
		const options = {
			limit: Number(limit), 
			page: Number(page)
		};
		const orden = Number(sort);
		if(orden !== 0){
			orden > 0 ? options.price = 1 : options.price = -1;
		}

		const filter = filters
			.filter(element => element[0]==='category' || element[0]==='disponible')
			.reduce((acum,item) => {
				if(item[0] === 'category'){
					acum['category'] = item[1];
					return acum;
				}
				if(item[0] === 'disponible'){
					acum['disponible'] = Boolean(item[1]);
					return acum;
				}
			}, {});
		
		const result = await ProductModel.paginate(filter, options);
		
		const doc = {
			payload: result.docs,  
			totalPages: result.totalPages, 
			prevPage: result.prevPage, 
			nextPage: result.nextPage, 
			page: result.page, 
			hasPrevPage: result.hasPrevPage, 
			hasNextPage: result.hasNextPage, 
		};
		
		console.log(doc)

		if(doc.page > doc.totalPages) return {status: 'error', messageError: 'Error de paginación'};
		return {
			status: 'succsess',
			...doc,
			prevLink: doc.hasPrevPage ? `/api/product/?page=${prevPage}&limit=${options.limit}` : null,
			nextLink: doc.hasNextPage ? `/api/product/?page=${nextPage}&limit=${options.limit}` : null,
		}
	}
}

export default Product;