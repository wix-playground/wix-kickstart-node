const WebSocket = require('ws');

const http = require('http');

// Express
var express = require('express');
var app = express();

app.get('/test', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Hello, Secure World!</h1>');
});


const server = http.createServer(app);


// WS
const wss = new WebSocket.Server({ server, path: '/ws' });

wss.on('connection', (client, req) => {
  console.log(`Client connected`, req.headers);

  // console.log(client);

  client.on('message', message => {
    console.log(`Received message => ${message}`);
    client.send(`Got message: ${message}`);
  });

  client.send('hi!');

  setInterval(() => {
    client.send(JSON.stringify({ time: Date.now() }));
  }, 2000);

});


server.listen(8080);
