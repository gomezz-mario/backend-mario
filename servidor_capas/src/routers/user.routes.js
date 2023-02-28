import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();
const userController = new UserController();

router.get('/', async (req, res) => {
	const { email } = req.query;
	console.log(email)
	const user = await userController.getUserByEmail(email);
	res.status(200).json({status: 'success', user});
	//res.redirect('../../')
});

router.post('/', async (req, res) => {
	const userData = req.body;
	console.log(userData)
	await userController.createUser(userData);
	res.status(200).redirect('../../')
});


export default router;