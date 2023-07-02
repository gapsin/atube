import express from 'express';
import morgan from 'morgan';

//CommonJS
//const express = require('express')
const app = express()
const port = 3000
const logger = morgan("dev");
app.use (logger);


app.use(logger);

const middleWare = (req, res, next) =>{
    console.log('LOGGED');
    next();
    };

app.get('/', (req, res) => {
  console.log("home !!!!");
  console.log(req);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})