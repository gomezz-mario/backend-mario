import cartModel from "../models/cart.model.js"

class CartsManager{
	getCartById = async(id) => {
		return await cartModel.findById(id).lean();
	}
}

const cartManager = new CartsManager();
export default cartManager;