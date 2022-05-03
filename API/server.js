const { response } = require('express')
const express = require('express')
const app = express()
const fs = require("fs")

const apikeys = fs.readFileSync(__dirname + "/apiKeys.json", '', (error, data)=>{if(error) throw error;})
const apiKeysJson = JSON.parse(apikeys)
let apiKeysSet = new Set(apiKeysJson)

let appPort = process.argv[2]

app.get("/library", (req, res)=> {
    if (apiKeysSet.has(req.query.apikey)){
        res.sendFile(__dirname + "/Jokes.js")
        console.log("Aa")
    }
    else{
        res.send("Unaloved")
    }
    
})

app.listen(appPort)