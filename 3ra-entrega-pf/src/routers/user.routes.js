import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/', passport.authenticate('login-local'), async (req, res) => {
	if(!req.user) return res.status(400).send('Login error');
	req.session.user = req.user;
	res.json({status: 'success', user: req.session.user}); 
});

router.post('/', passport.authenticate('register-local') , async(req, res) => {
	if(!req.user) return res.status(400).send('Login error');
	req.session.user = req.user;
	res.status(200).send('Usuario registrado'); 
});

router.get('/logout', async(req, res) => {
	if(req.session.user){
		req.session.destroy(error => {
			if(error) console.log("Error en LogOut. ", error);
		});
	}
	res.json({status: "success"});
})

export default router;