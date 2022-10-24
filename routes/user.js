var express = require('express');

var router = express.Router();
var delFunc = require ('../models/delete')
router.get('/' , function(req,res,next)
{
    res.send('respond with a resource');
});
router.post('/functions',async function(req,res,next){
    let product_id = req.is;
    console.log(product-id);
    delFunc(product-id);
    var username ='vandal';
    let table_string = await display_table(shop_id)
    res.render('user', { 
                        title: 'USER PAGE',
                        name: username,
                        table_string:table_string
                });
                
})

module.exports = router;
