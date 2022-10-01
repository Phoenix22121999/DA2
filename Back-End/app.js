const express = require('express');
// const {routers} = require('./Router/index');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./app.router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',router);



app.get('/', (req,res)=>{
    res.send('Hello to my api');
})

app.listen(port , ()=>{
    console.log(`Server is start at http://localhost:${port}`);    
})