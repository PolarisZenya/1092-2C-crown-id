const Category_xx = require('../models/categoryModel_xx');

const Clothing_xx = require('../models/clothingModel_xx');

exports.getHomepage = async (req, res) => {
  let data;
  const [rows] = await Category_xx.fetchAll();
  data = rows;
  // res.json(data);
  res.render('crown2_xx', {
    title: 'Hsingtai Chung 123456789 (async/await)',
    data,
  });
};

exports.getProductsByCategory = async (req, res) => {
  console.log('req.params', req.params.product);
  let data = {};
  data.cid = 0;
  if (req.params.product === 'hats') data.cid = 1;
  else if (req.params.product === 'jackets') data.cid = 2;
  else if (req.params.product === 'sneakers') data.cid = 3;
  else if (req.params.product === 'womens') data.cid = 4;
  else if (req.params.product === 'mens') data.cid = 5;

  try {
    const [rows] = await Clothing_xx.fetchProductByCategory(data.cid);
    data.clothing = rows;
    // res.json(data);
    res.render('products_xx', {
      title: req.params.product,
      data: data.clothing,
    });
  } catch (err) {
    console.log('error', err);
  }
};
