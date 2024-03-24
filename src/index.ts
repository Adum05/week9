import { Express, Request, Response } from "express"

const express = require('express')
const app = express()

app.get('/foo', function (req: Request, res: Response) {
    console.log(req.headers)
  res.send('Hello World')
})

app.listen(3000)


