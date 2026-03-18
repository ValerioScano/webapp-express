function notFound(req, res) {
    res.status(404).json({
        error: "Not found",
        message: "Non è stato possibile trovare la rotta"
    })
}

module.exports = notFound