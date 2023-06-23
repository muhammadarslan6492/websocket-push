const http = require('http');
const WebsocketServer = require('websocket').server;

let connections = [];

// create http server
const httpServer = http.createServer();

//pass the httpserver object to the WebSocketServer library to do all the job, this class will override the req/res

const websocket = new WebsocketServer({ httpServer: httpServer });

//listen on the TCP socket

httpServer.listen(8080, () => console.log('server is running on port 8080'));

websocket.on('request', (request) => {
  const connection = request.accept(null, request.origin);

  connection.on('message', (message) => {
    // send message to all connected user
    connections.forEach((item) =>
      item.send(
        `User: ${connection.socket.remotePort} message: ${message.utf8Data}`
      )
    );
  });
  connections.push(connection);

  // connected user notification to every one

  connections.forEach((item) =>
    item.send(`User-${connection.socket.remotePort} just connected`)
  );
});
