var express = require('express');

var app = express();

app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/api', express.static(__dirname + '/api'));

var server = app.listen(3000, function () {
    var port = server.address().port;
})