const express = require("express");
const app = express(); // instance of express js application 

app.listen(3000,()=>{
    console.log("Server is successfully listing on port 3000.");
});

app.use("/test",(req,res)=>{
    res.send("hello from the server");
});

app.use("/hello",(req,res)=>{
    res.send("hello hello hello");
});

app.use("/",(req,res)=>{
    res.send("hello Namaste from Dashboard");
});