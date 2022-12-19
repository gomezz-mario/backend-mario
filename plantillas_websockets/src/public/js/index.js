const socket = io();

const nuevoProducto = {
	"title": "nuevo producto",
	"precio": 14000,
	"stock": 2,
	"code": "AACC11"
}

socket.emit('nuevo_producto', nuevoProducto);



//socket.emit('message', "Hola soy Mario y estoy emitiendo desde el socket");
//socket.on('para_uno', data => console.log("Mensaje desde el servidor: ", data));