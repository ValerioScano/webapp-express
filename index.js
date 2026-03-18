const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Rotta chiamata")
})

app.listen(3000, () => {
    console.log(`Connessione stabilita su http://localhost:${port}`)
})