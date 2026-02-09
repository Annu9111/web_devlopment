const express = require("express");
const path=require("path");

const app = express();
const port=80;

app.use('/statics',express.static('statics'))
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
});
app.get("/",(req,res)=>{
    res.send("this is my first request App")
});

app.listen(port,()=>{
    console.log(`application started successfully ${port}`);
})