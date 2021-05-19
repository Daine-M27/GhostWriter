var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SHALL WE PLAY A GAME?', subTitle: 'DMX TO RDM INTERFACE' });
});

module.exports = router;
