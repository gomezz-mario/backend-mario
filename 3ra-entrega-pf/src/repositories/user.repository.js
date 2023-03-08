import UserDTO from "../dao/dto/user.dto.js";

export default class UserRepository{
	constructor(userDao){
		this.userDao = userDao;
	};
	getUserByEmailAndSocial = async(email, social) => {
		const result = await this.userDao.getUserByEmailAndSocial(email, social);
		return result;
	};
	getUserById = async(id) => {
		const result = await this.userDao.getUserById(id);
		return result;
	};

	addUser = async (userData) => {
		const userToInsert = new UserDTO(userData);
		return await this.userDao.addUser(userToInsert);
	};
}