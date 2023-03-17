import ProductModel from "./models/product.model.js";
import Connect from "./connect.js";

class Product{
	constructor(){
		Connect.getInstance();
	};
	getProductById = async (id) => {
		try {
			return await ProductModel.findById(id);
		} catch (error) {
			return null;
		}
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
			products: result.docs,
			pagination: {
				totalPages: result.totalPages, 
				prevPage: result.prevPage, 
				nextPage: result.nextPage, 
				page: result.page, 
				hasPrevPage: result.hasPrevPage, 
				hasNextPage: result.hasNextPage, 
			}  
		};

		if(doc.pagination.page > doc.pagination.totalPages) return null;
		
		doc.pagination.prevLink = doc.hasPrevPage ? `/api/product/?page=${prevPage}&limit=${options.limit}` : null;
		doc.pagination.nextLink = doc.hasNextPage ? `/api/product/?page=${nextPage}&limit=${options.limit}` : null;

		return doc;
	}
	deleteProductById = async(id) => {
		return await ProductModel.findByIdAndDelete(id);
	}
}

export default Product;