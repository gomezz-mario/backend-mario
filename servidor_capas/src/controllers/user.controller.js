import UserService from "../services/user.service.js";

class UserController{
	constructor(){
		this.userService = new UserService();
	};
	getUserByEmail = async (userEmail) => {
		return await this.userService.getUserByEmail(userEmail);
	}
	createUser = async (userData) => {
		return await this.userService.createUser(userData);
	}
}

export default UserController;