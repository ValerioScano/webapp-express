function errorsHandler(err, req, res, next) {
    console.log(err),
        res.status(500).json({
            error: "Problemi del database",
            message: err.message
        })
}

module.exports = errorsHandler