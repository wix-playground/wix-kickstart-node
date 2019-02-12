const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

wss.on('connection', (ws, req) => {
  console.log(`Client connected`, req.headers);

  ws.on('message', message => {
    console.log(`Received message => ${message}`);
    // ws.send(`Got message: ${message}`);
  });

  ws.send('hi!');

  // setInterval(() => {
  //   ws.send(JSON.stringify({ time: new Date().toISOString() }));
  // }, 5000);

});
