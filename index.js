const express = require("express")
const app = express()
const port = 3000
const errorsHandlerMiddleware = require("./middlewares/errorsHandler")
const notFoundMiddleware = require("./middlewares/notFound")

app.use(express.static("public/movies_cover/"))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Rotta chiamata")
})

app.use(notFoundMiddleware)
app.use(errorsHandlerMiddleware)
app.listen(3000, () => {
    console.log(`Connessione stabilita su http://localhost:${port}`)
})