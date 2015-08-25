var restify = require('restify');

var server = restify.createServer({
    name: 'myapp'
});


function send(req, res, next){
    res.send('hello ' + req.params.name);
    return next();
}


server.post('/hello', function create(req, res, next){
    res.send(201, Math.random().toString(36).substr(3, 8));
    return next();
});
server.put('/hello', send);
//server.get('/hello/:name', send);
server.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, send);
server.head('/hello/:name', send);
server.del('hello/:name', function rm(req, res, next) {
    res.send(204);
    return next();
});

server.listen(3000, function(){
    console.log('%s listening at %s', server.name, server.url);
});

/**
 * express
 * @type {*|exports|module.exports}
 */
    /*
var express = require('express');
var path = require('path');
var app = express();

//routes
var index = require('./routes/index');
var users = require('./routes/users');
//var blog = require('./routes/blog');

app.use('/', index);
app.use('/users', users);
//app.use('/blog', blog);

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
app.use('/static', express.static(path.join(__dirname, 'public')));



var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
        */