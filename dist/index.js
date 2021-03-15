"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("./routes/router"));
var server_1 = __importDefault(require("./classes/server"));
var server = new server_1.default();
server.app.use('/', router_1.default);
server.start(function () {
    var puerto = server.port;
    console.log("El server esta corriendo en el puerto  :", puerto);
});
