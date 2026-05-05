const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const USER = {
    username : "admin",
    password : 1234
};

app.post('/login',(req,res)=>{
    const {username , password } =req.body;

    if(username === USER.username && password === USER.password){
        return res.send("Login Successful.");
    }

    res.status(401).send("Wrong Username or Password")
});

app.get('/logout',(req,res)=>{
    res.send("Logged Out Successfully.");
});

app.listen(PORT, ()=>{
    console.log("server running on localhost server: http://localhost:${PORT}");
});