var fs = require("fs")
console.log("1");
console.log("2");
var data = ""
fs.readFile("./input.txt",function(err,data){
    console.log(data.toString())
    data = data.toString();
})
console.log(data);