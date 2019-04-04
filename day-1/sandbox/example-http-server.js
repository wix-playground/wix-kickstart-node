const express = require('express');
const responseTime = require('response-time');

const app = express();
const port = 3000;

app.set('x-powered-by', false);

const myLogger = (req, res, next) => {
  console.log('LOGGED', req.hostname);

  res.locals.userId = 'user1234';

  next(new Error('Some error'));
};

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500);
  res.json({ error: err && err.message });
};

app.use(responseTime());
app.use(myLogger);

app.get('/', (req, res) => {
  res.json({ test: res.locals.userId });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
