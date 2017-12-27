// 引入内置模块http，并赋值给http变量
var http = require("http");
// 获取前端请求的url数据
var url = require('url');
// 处理url上的参数，把它转为js对象
var querystring = require("querystring")
// 利用createServer来创建服务器
http.createServer((req,res)=>{
    // 解决跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    res.end('callback({"name":"abc","skill":"sssss"})')
}).listen(6699)
console.log("开启服务器")