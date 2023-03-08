import UserModel from "./models/user.model.js";
import Connect from "./connect.js";

class User{
	constructor(){
		Connect.getInstance();		
	};
	getUserByEmailAndSocial = async (email, social) => {
		const query = {email};
		social ? query.social = social : query.social = 'local';
		const user = await UserModel.findOne(query);
		return user;
	}
	getUserById = async (id) => {
		return await UserModel.findById(id);
	}
	addUser = async (userData) => {
		return await UserModel.create(userData); 
	}
}

export default User;