import { Router } from 'express';
const router = Router();

function auth(req, res, next){
	if(req.session?.user) return next();
	return res.status(401).render('errors/base', {error: "No autorizado"})
}

router.get('error', (req, res) => {
	res.render('errors/base', {error: req.body.error})
});

router.get('/products', auth ,(req, res) => {
	res.status(200).render('products');
})

router.get('/login', (req, res) => {
	res.render('session');
})

export default router;