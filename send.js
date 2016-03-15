module.exports = function() {

    return function(req, res) {

        if (!res.ctx) {
            res.status(500).json({
                error: {
                    message: 'Server Error',
                    code: 'no_response_context'
                }
            });
        }

        if (res.ctx.status) {
            res.status(res.ctx.status);
        }

        if (res.ctx.body) {
            res.json(res.ctx.body);
        } else {
            res.json();
        }

    };

};
