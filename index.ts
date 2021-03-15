import router from "./routes/router";
import Server from "./classes/server";
import bodyParser from 'body-parser';

const server = new Server();

// BodyParser
server.app.use(bodyParser.urlencoded({ extended : true}));
server.app.use(bodyParser.json());
//Importante poner el body parser antes de las rutas
server.app.use('/', router)

server.start(()=>{
    const puerto = server.port;
    console.log("El server esta corriendo en el puerto  :",puerto);
})