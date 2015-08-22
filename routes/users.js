var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('users Time: ', Date.now());
    next();
});

router.use('/:id', function (req, res, next){
    console.log('users Request Type: ', req.method);
    next();
});

router.get('/:id', function (req, res){
    res.send('user id  '+ req.params.id);
});

router.get('/', function (req, res) {
    res.send('users home');
});

//router.get('/about', function (req, res) {
//    res.send('users about');
//});

module.exports = router;