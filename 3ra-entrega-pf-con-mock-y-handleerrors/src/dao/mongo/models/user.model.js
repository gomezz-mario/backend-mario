import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	first_name: String,
 	last_name: String,
  	full_name: String,
  	username: String,
  	email: {
		type: String,
		required: true,
		unique: true
  	},
  	phone: String,
  	social: String,
  	password: String,
	role: String
});

export default mongoose.model('users', userSchema);