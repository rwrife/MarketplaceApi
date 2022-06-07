var express = require('express');
var serveStatic = require('serve-static');
var data = require('./data.json');
var cors = require('cors');

var staticBasePath = './images';

var app = express();

app.use(cors());

app.use('/img', serveStatic(staticBasePath, {'index': false}));

app.get('/api', (req, res) => {
    res.json(data)
})

app.listen(process.env.PORT  || 8080);