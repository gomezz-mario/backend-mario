import mongoose from "mongoose";

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

export default mongoose.model('users', userSchema);