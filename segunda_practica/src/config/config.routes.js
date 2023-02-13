import appExpress from '../server.js';
import viewsRouter from '../routes/views.routes.js';
import sessionRouter from '../routes/session.routes.js';

export default () => {
	appExpress.use('/', viewsRouter);
	appExpress.use('/session', sessionRouter);
}