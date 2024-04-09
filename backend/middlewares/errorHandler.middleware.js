
const errorHandler = (err, req, res, next) => {
    res.json({
        error: err.message,
        status: err.statusCode,
    })
}

module.exports = errorHandler;