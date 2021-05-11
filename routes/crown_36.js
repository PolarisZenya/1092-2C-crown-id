var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_36', { title: '408410636葉忠諺' });
});

module.exports = router;
