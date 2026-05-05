const express = require('express');
const route = require('./src/route.js');

const app = express();

app.use(express.json());

app.use('/action', route);



app.listen(3000, ()=>{
    console.log("server running on localhost server: http://localhost:3000");
});