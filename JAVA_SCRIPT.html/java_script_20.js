const http=require("http")
const fs=require("fs")
const path = require("path");
s
const filePath = path.join(__dirname, "java_script_2.html");
const filecontent=fs.readFileSync(filePath)

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(filecontent);
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("listening on port 3000")
}) 
  