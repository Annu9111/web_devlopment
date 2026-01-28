// synchronous or blocking - line by line execution  guranteed
// asynchronous or non-blocking - line by line execution not guranteed ,call back will fire

const fs=require("fs");
let text=fs.readFile("./JAVA_SCRIPT.html/demo.txt","utf-8",(a,b)=>{
    console.log(a,b);
});
console.log("This is a message");

