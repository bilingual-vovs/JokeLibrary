const { response } = require('express')
const express = require('express')
const app = express()
const fs = require("fs")

const apikeys = fs.readFileSync(__dirname + "/apiKeys.json", '', (error, data)=>{if(error) throw error;})
const apiKeysJson = JSON.parse(apikeys)
let apiKeysSet = new Set(apiKeysJson)
const docsArr = fs.readFileSync(__dirname + "/docs.json", '', (error, data)=>{if(error) throw error;})
const docsArrJson = JSON.parse(docsArr)


let appPort = process.argv[2]

app.get("/library", (req, res)=> {
    if (apiKeysSet.has(req.query.apikey)){
        res.sendFile(__dirname + "/Jokes.js")
        
    }
    else{
        res.send("Unaloved")
    }
    
})
app.get("/documentMap", (req, res)=>{
    res.send(docsArrJson)
    
})

app.listen(appPort)