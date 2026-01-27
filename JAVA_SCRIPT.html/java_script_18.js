const fs = require("fs");
const text=fs.readFileSync("JAVA_SCRIPT.html/demo.txt","utf-8");
text=text.replace("writing","reading");

console.log("the content of the file is");
console.log(text);

fs.writeFileSync("in","on");
