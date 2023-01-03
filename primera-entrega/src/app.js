import express from 'express';
import handlebars from 'express-handlebars';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import { connectDB } from './db.js';
import sockets from './sockets.js';
import viewRouter from "./routers/view.routers.js";
import __dirname from './utils.js'
import { PORT } from './config.js';

connectDB();
const app = express();
const server = http.createServer(app);
const httpServer = server.listen(PORT);
sockets(new SocketServer(httpServer));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use('/', viewRouter);

console.log("Escuchando puerto ",PORT);