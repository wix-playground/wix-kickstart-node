const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

wss.on('connection', (client, req) => {
  // console.log(`Client connected`, req.headers);

  client.on('message', message => {
    console.log(`Received message => ${message}`);
    client.send(`Got message: ${message}`);
  });

  client.send('hi!');

  setInterval(() => {
    client.send(JSON.stringify({ time: Date.now() }));
  }, 2000);

});
