var express = require('express');
var serveStatic = require('serve-static');
var data = require('./data.json');

var staticBasePath = './images';

var app = express();

app.use('/img', serveStatic(staticBasePath, {'index': false}));

app.get('/api', (req, res) => {
    res.send(JSON.stringify(data))
})

app.listen(process.env.PORT  || 8080);