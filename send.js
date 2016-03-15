module.exports = function() {

    return function(req, res) {

        if (!res._context) {
            res.status(500).json({
                error: {
                    message: 'Server Error',
                    code: 'no_response_context'
                }
            });
        }

        if (res._context.status) {
            res.status(res._context.status);
        }

        if (res._context.body) {
            res.json(res._context.body);
        } else {
            res.json();
        }

    };

};
