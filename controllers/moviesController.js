const db = require("../data/db")

function index(req, res) {
    const sqlQuery = "SELECT * FROM movies";
    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Database query error",
                message: err.message
            })
        }
        res.json(results)
    })
}

function show(req, res) {
    const id = req.params.id
    const sqlQueryMovies = "SELECT * FROM movies WHERE id=?"
    const sqlQueryReviews = "SELECT reviews.name, reviews.vote, reviews.text FROM reviews WHERE movie_id=?"

    db.query(sqlQueryMovies, [id], (err, movies) => {
        if (err) {
            return res.status(500).json({
                error: "Database query error",
                message: err.message
            })
        }

        if (movies.lengths === 0 || movies[0].id === null) {
            return res.status(404).json({
                error: "Not found",
                message: err.message

            })
        }

        const movie = movies[0]

        db.query(sqlQueryReviews, [id], (err, reviews) => {
            if (err) {
                return res.status(500).json({
                    error: "Database query error",
                    message: err.message
                })
            }
            movie.reviews = reviews;
            res.json(movie)
        })
    })
}

module.exports = {
    index,
    show
}