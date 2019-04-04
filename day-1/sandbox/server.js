
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/proxy', async (req, res) => {
  try {
    const { data } = await axios.get('http://uinames.com/api/');
    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });

module.exports = app;
