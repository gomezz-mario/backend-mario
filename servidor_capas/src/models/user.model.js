import mongoose from "mongoose";

const collectionName = 'users';
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  social: String,
  username: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  age: Number,
  role: String,
  cart_id: String
});

export default class UserModel{
	constructor(){
		this.model = mongoose.model(collectionName, userSchema);
  }

	createUser = async (userData) => {
    return await this.model.create(userData)
	}

	getUserByEmail = async (emailUser) => {
    console.log('findOne ,' + emailUser)
		return await this.model.findOne({email: emailUser});
  }

}
