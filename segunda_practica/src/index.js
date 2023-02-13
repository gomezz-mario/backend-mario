import connect from './connect.js';
import httpServer from './config/config.server.js'

connect()
.then(() => {
	httpServer.listen(8080);
	console.log('Servidor escuchando en el puerto 8080');
})
.catch(error => {
	console.log('Fallo la conexión a base de datos. ', error);
});