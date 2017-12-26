// 同步方案
var fs = require("fs")
console.log("1");
console.log("2");
var data = fs.readFileSync("./input.txt").toString()
//console.log();
console.log(data);