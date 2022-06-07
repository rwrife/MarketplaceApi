var express = require('express');
var serveStatic = require('serve-static');
var data = require('./data.json');

var staticBasePath = './static';

var app = express();

app.use(serveStatic(staticBasePath, {'index': false}));

app.get('/api', (req, res) => {
    res.send(JSON.stringify(data))
})

app.listen(process.env.NODE_PORT || 8080);