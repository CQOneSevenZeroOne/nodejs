//内置模块
var fs = require("fs")
// console.log(fs)
fs.readFile("./input.txt",function(err,data){
    console.log(data.toString())
})
