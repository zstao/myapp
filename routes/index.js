var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    //console.log('index Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('/');
});

router.get('/about', function (req, res) {
    res.send('about');
});

module.exports = router;