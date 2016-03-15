var express = require('express');

var app = express();

app.use(require('../context')());

app.use(function (req, res, next) {
    res.result('test');
    next();
});

app.use(function (req, res, next) {
    res.ctx.body.debug = 'debug';
    next();
});

app.use(require('../send')());

app.listen(8888);
