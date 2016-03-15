module.exports = function() {

    return function(req, res, next) {

        res.serverError = function() {

            res._context = {
                status: 500,
                body: {
                    error: {
                        message: 'Server Error',
                        code: 'server_error'
                    }
                }
            };

        };

        res.notFound = function(message, code) {

            res._context = {
                status: 404,
                body: {
                    error: {
                        message: message,
                        code: code
                    }
                }
            };

        };

        res.result = function(data, metadata) {

            var response = {};

            if (metadata) {
                response.metadata = metadata;
            }

            response.result = data;

            res._context = {
                status: 200,
                body: response
            };

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

            res._context = {
                status: 400,
                body: {
                    error: {
                        message: message,
                        code: code,
                        list: list
                    }
                }
            };
        };

        next();
    };


};
