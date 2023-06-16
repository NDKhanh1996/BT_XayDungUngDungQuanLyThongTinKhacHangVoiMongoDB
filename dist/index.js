"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./src/router/router"));
const app = (0, express_1.default)();
const port = 8080;
app.set('view engine', 'ejs');
app.set('views', './src/views');
const DB_URL = 'mongodb://codegym:123456@127.0.0.1:27017/codegym';
mongoose_1.default.connect(DB_URL).then(() => { console.log('Connect success'); }).catch(() => { console.log('connect error'); });
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(router_1.default);
app.listen(port, () => { console.log('listening on port ' + port); });
//# sourceMappingURL=index.js.map