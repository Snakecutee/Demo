var express = require('express');
var router = express.Router();
var tableShop = require('../Model/showtable');
var productFromShop = require('../Model/getSelectedProduct');
var getNumberShop = require('../Model/getNumberShop');


router.get('/findShop', async function (req, res, next) {
   // var tableProduct = await tableShop(1);
   var name = body.req.nameShop;
   let listSelectShop = await getNumberShop();
   var tableProduct = await productFromShop(name);
   res.render('admin', {Title:'Admin',selectBox: listSelectShop, result: tableProduct})
});

module.exports = router;