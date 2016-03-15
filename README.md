# express-response-helper

Express middleware adds response helper functions  

See examples below

# usage

## use "functions" module (send response immediately)

```js
var app = require('express')();
var responseHelpers = require('express-api-response-helpers/functions');

app.use(responseHelpers());

app.get('/api/test', function (req, res) {

    some_db_or_anything_else_request(function (err, data) {

        if (err) {
            res.serverError();
            return;
        }

        res.result(data);

    });

});
```

## use context and send modules (if need postprocessing)

```js
var express = require('express');

var app = express();

app.use(require('express-api-response-helpers/context')());

app.use(function (req, res, next) {
    res.result('test');
    next();
});

app.use(function (req, res, next) {
    res.ctx.body.debug = 'debug';
    next();
});

app.use(require('express-api-response-helpers/send')());

app.listen(8888);

})
})
```

# helpers

## res.serverError()

send http status:  500 Server Error

```
{
    "error": {
        "message": "Server Error",
        "code": "server_error"
    }
}
```


## res.notFound(message, code)

send http status: 404 Not Found

```
{
    "error": {
        "message": "<message>",
        "code": "<code>"
    }
}
```


## res.result(data, metadata)

send http status: 200 OK

```
{
    "metadata": <metdata>,
    "result": <data>
}
```

## res.badRequest(error)

take error Error object or object as argument with props:

- message
- code
- list - list of errors

send http status: 400 Bad Request

```
{
    "error": {
        "message": "<error.message>",
        "code": "<error.code>",
        "list": <error.list>
    }
}
```
