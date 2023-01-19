import serverUp from './server.js';
import connectToDB from './connectToDB.js';
import __dirname from './utils.js';


connectToDB(() => {
	const httpServer = serverUp();
	//aca iria la conexion con websockets si es necesario...

	

	console.log("Servidor escuchando...");
});

