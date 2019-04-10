const express = require('express');

const app = express();

app.get('/', (req, res) => { res.end('Hello world') });

const server = require('http').createServer(app);

const port = process.env.port || 3000;

server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');

  server.close(function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.info('Service stopped');
      process.exit();
    }
  })
});
