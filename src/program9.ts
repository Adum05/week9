import { Express, Request, Response, query } from "express";

const express = require('express')
const app = express()

app.get('/' , function(req: Request, res: Response) {
    console.log(req.headers)
    res.send('Welcome to my node Server')
})

app.get('/foo', function(req: Request, res: Response){
    const value = req.query.var

    if (value) {
        res. send(`The value of var parameter is ${value}`)
    } else {
        res.send(`No value provided for the query parameter`)
    }
})

app.listen(3000)
//Server is running on localhost:3000/ or localhost:3000/foo?var=value