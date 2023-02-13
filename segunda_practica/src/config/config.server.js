import http from 'http';
import appExpress from "../server.js";
import configHandlebars from "./config.handlebars.js";
import configSessions from "./config.sessions.js";
import configCors from "./config.cors.js";
import configRoutes from "./config.routes.js";
import configPassport from './config.passport.js';

configHandlebars();
configSessions();
configCors();
configRoutes();
configPassport();


export default http.createServer(appExpress);