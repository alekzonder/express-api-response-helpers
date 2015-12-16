module.exports = function () {

    return function (req, res, next) {

        res.serverError = function () {

            res.status(500).json({
                error: {
                    message: 'Server Error',
                    code: 'server_error'
                }
            });

        };

        res.notFound = function (message, code) {

            res.status(404).json({
                error: {
                    message: message,
                    code: code
                }
            });

        };

        res.result = function (data, metadata) {

            var response = {};

            if (metadata) {
                response.metadata = metdata;
            }

            response.data = data;

            res.json(response);
        };

        res.badRequest = function (error) {

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

            res.status(400).json({
                error: {
                    message: message,
                    code: code,
                    list: list
                }
            });

        };

        next();
    };
};
