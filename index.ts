import Server from "./classes/server";
const server = new Server();
server.start(()=>{
    const puerto = server.port;
    console.log("El server esta corriendo en el puerto  :",puerto);
})