"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("./routes/router"));
var server_1 = __importDefault(require("./classes/server"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var server = new server_1.default();
// BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Importante poner el body parser antes de las rutas
//Para que cualquier persona pueda acceder a nuestros servicios
server.app.use(cors_1.default({ origin: true, credentials: true }));
//Antes de los sercvicios se configuran los CORS
server.app.use('/', router_1.default);
server.start(function () {
    var puerto = server.port;
    console.log("El server esta corriendo en el puerto  :", puerto);
});
