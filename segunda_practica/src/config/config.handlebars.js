import appExpress from '../server.js';
import handlebars from 'express-handlebars';

export default () => {
	appExpress.engine('handlebars', handlebars.engine());
	appExpress.set('views', 'src/views');
	appExpress.set('view engine', 'handlebars');
}