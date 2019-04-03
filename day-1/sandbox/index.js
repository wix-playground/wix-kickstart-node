
const path = require('path');
const express = require('express');


const app = express();
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/template', (req, res) => {
  res.render('index', {time: new Date().toISOString()});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
