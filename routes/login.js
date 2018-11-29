var express = require('express');
var User = require('../entity/User');
var router = express.Router();

router.post('/', function (req, res, next) {

    var user = new User(res.body);
    
});

module.exports = router;
