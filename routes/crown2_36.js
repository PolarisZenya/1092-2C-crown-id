var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const categories =
[
  {
    id: 1,
    name: 'hats',
    size: "",
    remote_url: 'https://i.ibb.co/cvpntL1/hats.png',
    local_url:'/img/homepage/hats.png'
  },
  {
    id: 2,
    name: 'jackets',
    size: "",
    remote_url: 'https://i.ibb.co/px2tCc3/jackets.png',
    local_url:'/img/homepage/jackets.png'
  },
  {
    id: 3,
    name: 'sneakers',
    size: "",
    remote_url: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    local_url:'/img/homepage/sneakers.png'
  },
  {
    id: 4,
    name: 'womens',
    size: "large ",
    remote_url: 'https://i.ibb.co/GCCdy8t/womens.png',
    local_url:'/img/homepage/womens.png'
  },
  {
    id: 5,
    name: 'mens',
    size: "large ",
    remote_url: 'https://i.ibb.co/R70vBrQ/men.png',
    local_url:'/img/homepage/mens.png'
  },
]

// create the pool
const pool = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '0000',
  database: 'crown_36'});

const db = pool.promise();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_36', 
  { 
    title: '408410636葉忠諺 (static)' ,
    data: categories
  });
});

/* GET database. */
router.get('/homepage',async function(req, res, next) {

  const [rows] =await db.query("SELECT * from category_36")
  let data = rows;

  //res.json(data);
  
  res.render('crown2_36', 
  { 
    title: '408410636葉忠諺 (async/mysql_db)' ,
    data
  });
});

module.exports = router;
