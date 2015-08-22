var express = require('express');
var app = express();

//routes
var index = require('./routes/index');
var users = require('./routes/users');

app.use('/', index);
app.use('/users', users);

//app.get('/', function (req, res) {
//    res.send('Hello');
//});
//
//app.post('/', function (req, res) {
//    res.send('Got a POST request');
//});
//
//app.get('/example/a', function (req, res) {
//    res.send('Hello from A!');
//});
//app.get('/example/b', function (req, res, next) {
//    console.log('response will be sent by the next function ...');
//    next();
//}, function (req, res) {
//    res.send('Hello from B!');
//});
//var cb0 = function (req, res, next) {
//    console.log('CB0');
//    next();
//};
//var cb1 = function (req, res, next) {
//    console.log('CB1');
//    next();
//};
//var cb2 = function (req, res) {
//    res.send('Hello from C!');
//};
//app.get('/example/c', [cb0, cb1, cb2]);

//app.use(express.static('public'));
app.use('/static', express.static('public'));


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});