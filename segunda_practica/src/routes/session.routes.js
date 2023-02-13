import { Router } from 'express';
import passport from 'passport';

const router = Router();



router.post('/register', passport.authenticate('register', {failureRedirect: 'errors/base'}), (req, res) => {
	res.status(204).redirect('/login');
});

router.post('/login', passport.authenticate('login', {failureRedirect: 'errors/base'}), async(req, res) => {
	if(!req.user){
		req.body.error = 'Error login';
		res.redirect('error/base');
	}
	req.session.user = req.user;
	res.status(204).redirect('/products');
});

router.get('/logout', async(req, res) => {
	if(req.session.user){
		req.session.destroy(error => {
			if(error) console.log("Error en LogOut. ", error);
		});
	}
	res.redirect('../login');
});

export default router;