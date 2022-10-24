var express = require('express');
var router = express.Router();
// var pg_conn = require('./database');
var authen = require('./authenticate');

router.get('/', function(req, res, next) {
    res.render('../views/login.ejs');
});

module.exports = router;