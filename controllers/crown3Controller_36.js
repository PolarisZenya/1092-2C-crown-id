const categoryMd_36 = require("../models/categoryModel.js");
const clothing_36 = require('../models/categoryModel_id.js');

exports.getHomepage = async (reg,res) => {

    let data;
    const [rows] = await categoryMd_36.fetchAll();
    data = rows;

    res.json(data);
    /*
    res.render('crown3_36', 
    { 
        title: '408410636葉忠諺 (async/mysql_db)' ,
        data
    });*/
}
exports.getProductsByCategory = async (req,res) => {
    var user_input = req.params.product;
    console.log('req.params', req.params.product);
    let data = {};
    data.cid = 0;
    if(user_input === 'hats') 
        data.cid = 1;
    else if (user_input === 'jackets')
        data.cid = 2;
    else if (user_input === 'Sneakers')
        data.cid = 3;
    else if (user_input === 'womens')
        data.cid = 4;
    else if (user_input === 'mens')
        data.cid = 5;
    const [rows] = await clothing_36.fetchProductBy(data.cid);
    data.clothing = rows;
    //res.json(data);

    res.render(user_input+'_36', 
    { 
        title: '408410636葉忠諺 (async/mysql_db)' ,
        data
    });
}