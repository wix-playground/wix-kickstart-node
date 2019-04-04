
var express = require('express');
var router = express.Router();

router.get('/users/:id', function (req, res) {
  res.send('OK' + req.params.id);
});

module.exports = router;
