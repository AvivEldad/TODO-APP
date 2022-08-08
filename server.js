const express = require('express');
const { validationResult } = require('express-validator');
bodyParser = require('body-parser'),
    path = require('path'),
    cors = require('cors');
    // routers = require('./server/routes/routes.js'),
    mongoose = require('./server/db/mongoose');
const port = 4008

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app.use('/', routers);



app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})