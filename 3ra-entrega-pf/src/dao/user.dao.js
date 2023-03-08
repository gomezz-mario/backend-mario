import User from './mongo/user.mongo.js';
class UserDao{
	constructor(){
		this.userDao = new User();
	};
	getUserByEmailAndSocial = async (email, social) => {
		const result = await this.userDao.getUserByEmailAndSocial(email, social);
		return result
	};
	getUserById = async (id) => {
		const result = await this.userDao.getUserById(id);
		return result
	};
	addUser = async (userData) => {
		return await this.userDao.addUser(userData);
	}
}

export default UserDao;