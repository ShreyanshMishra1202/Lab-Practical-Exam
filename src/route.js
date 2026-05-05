const express = require('express');

const router = express.Router();

const USER = {
    username : "admin",
    password : 1234
};

router.post('/login',(req,res)=>{
    const {username , password } =req.body;

    if(username === USER.username && password === USER.password){
        return res.send("Login Successful.");
    }

    res.status(401).send("Wrong Username or Password")
});

router.get('/logout',(req,res)=>{
    res.send("Logged Out Successfully.");
});


module.exports = router;