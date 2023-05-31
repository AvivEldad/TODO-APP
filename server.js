import express, { json, urlencoded } from 'express';
import { validationResult } from 'express-validator';
import cors from 'cors';
// import routers from './Backend/routes.js';
import connectToDatabase from './Backend/Database/mongoose.js';

const port = 2021
const app = express()
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


// app.use('/', routers);
app.use('/', (req, res) => {
    console.log('Time:', Date.now())});




app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})