import appExpress from "../server.js"

export default () => {
	appExpress.use((_req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', '*');
		next();
	});
}