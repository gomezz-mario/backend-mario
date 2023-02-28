import express from 'express'
import userRouter from './routers/user.routes.js';
import dotenv from 'dotenv';
import MongoSingleton from './MongoSingleton.js';
import handlebars from 'express-handlebars';
import { __dirname } from './utils/utils.js';
import viewsRouter from './routers/views.routes.js';

dotenv.config();
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'src/views');
app.set('view engine', 'handlebars');


MongoSingleton.getInstance();
app.use('/api/users', userRouter);
app.use('/', viewsRouter);
app.listen(process.env.PORT);
console.log('Server listen');