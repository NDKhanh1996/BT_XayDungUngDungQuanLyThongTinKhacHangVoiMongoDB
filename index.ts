import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import router from "./src/router/router";

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

const DB_URL = 'mongodb://codegym:123456@127.0.0.1:27017/codegym';

mongoose.connect(DB_URL).then(() => { console.log('Connect success') }).catch(() => { console.log('connect error') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => { console.log('listening on port ' + port)});