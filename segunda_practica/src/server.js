import express from 'express';
import { __dirname } from './utils.js';

const appExpress = express();
appExpress.use(express.json());
appExpress.use(express.urlencoded({extended: true}));
appExpress.use(express.static(__dirname + '/public'));

export default appExpress;