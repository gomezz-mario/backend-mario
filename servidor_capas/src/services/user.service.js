import UserModel from "../models/user.model.js";

class UserService{
	constructor(){
		this.userModel = new UserModel(); 
	};
	getUserByEmail = async (userEmail) => {
		return await this.userModel.getUserByEmail(userEmail);
	}
	createUser = (userData) => {
		return this.userModel.createUser(userData);
	}
}

export default UserService;