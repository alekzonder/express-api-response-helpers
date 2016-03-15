module.exports = function() {

    return function(req, res, next) {

        res.serverError = function() {

            res.ctx = {
                status: 500,
                body: {
                    error: {
                        message: 'Server Error',
                        code: 'server_error'
                    }
                }
            };

            if (res.ctxDone) {
                res.ctxDone();
            }

        };

        res.notFound = function(message, code) {

            res.ctx = {
                status: 404,
                body: {
                    error: {
                        message: message,
                        code: code
                    }
                }
            };

            if (res.ctxDone) {
                res.ctxDone();
            }

        };

        res.result = function(data, metadata) {

            var response = {};

            if (metadata) {
                response.metadata = metadata;
            }

            response.result = data;

            res.ctx = {
                status: 200,
                body: response
            };

            if (res.ctxDone) {
                res.ctxDone();
            }

        };

        res.badRequest = function(error) {

            var message = 'Bad Request';
            var code = null;
            var list = [];

            if (error.message) {
                message = error.message;
            }

            if (error.code) {
                code = error.code;
            }

            if (error.list) {
                list = error.list;
            }

            res.ctx = {
                status: 400,
                body: {
                    error: {
                        message: message,
                        code: code,
                        list: list
                    }
                }
            };

            if (res.ctxDone) {
                res.ctxDone();
            }
        };

        next();
    };


};
