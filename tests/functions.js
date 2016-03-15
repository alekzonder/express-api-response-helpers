var express = require('express');


var app = express();


app.use(require('../functions')());

app.use(function (req, res) {
    res.result('test');
});

app.listen(8888);
