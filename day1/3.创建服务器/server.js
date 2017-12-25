// 引入内置模块http，并赋值给http变量
var http = require("http");
// 利用createServer来创建服务器
http.createServer((req,res)=>{
    // 添加响应头，允许跨域
    res.setHeader("Access-Control-Allow-Origin","*")
    var obj = {
        html:`<p>abc<span style="color:red">789</span></p>`,
        skill:["JS","PS","CSS"]
    }
    // 写入响应体内容
    res.end(JSON.stringify(obj))
}).listen(65000)
// 0~65535
console.log("开启服务器")