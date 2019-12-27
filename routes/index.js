var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('项目开始,敬请期待...');
});

module.exports = router;
