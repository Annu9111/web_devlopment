const express = require("express");

const app = express();
const port=80;

app.get("/",(req,res)=>{
    res.send("this is my first request App")
});

app.listen(port,()=>{
    console.log(`application started successfully ${port}`);
})