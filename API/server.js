const express = require('express')
const app = express()

let appPort = process.argv[2]

app.use("/library", express.static(__dirname + "/Jokes.js"))

app.listen(appPort)