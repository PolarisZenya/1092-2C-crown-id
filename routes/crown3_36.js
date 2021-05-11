var express = require('express');
var router = express.Router();
const mysql = require('mysql2');


//去call存在data的程式
const category = require("../data/categories.js");
//const db = require("../utils/database.js");
router.get('/', function(req, res, next) {
  res.render('crown2_36', 
  { 
    title: '408410636葉忠諺 (static)' ,
    data: category
  });
});


const crown3Controller_36 = require('../controllers/crown3Controller_36.js');
router.get('/homepage',crown3Controller_36.getHomepage);


router.get('/shop_36/:product',crown3Controller_36.getProductsByCategory);


module.exports = router;
