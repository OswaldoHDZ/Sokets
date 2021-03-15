import router from "./routes/router";
import Server from "./classes/server";

const server = new Server();

server.app.use('/', router)

server.start(()=>{
    const puerto = server.port;
    console.log("El server esta corriendo en el puerto  :",puerto);
})