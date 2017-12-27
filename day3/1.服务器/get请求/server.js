// 引入内置模块http，并赋值给http变量
var http = require("http");
// 获取前端请求的url数据
var url = require('url');
// 处理url上的参数，把它转为js对象
var querystring = require("querystring")
// 利用createServer来创建服务器
http.createServer((req,res)=>{
    // 解决跨域
    res.setHeader("Access-Control-Allow-Origin","*")
    console.log(req.url)
    // 1.  /?name=laoyao&skill=js
    //console.log(url.parse(req.url))
    // 2.  name=laoyao&skill=js

    console.log(url.parse(req.url).query)
    var query = url.parse(req.url).query

    // 3.  name=laoyao&skill=js转为对象{name:laoyao,skill:ps}
    console.log(querystring.parse(query))
    var param = querystring.parse(query)

    if(param.username=="laoyao"&&param.password=="666"){
        res.end("success")
    }else{
        res.end("fail")
    }

    // 添加响应头，允许跨域
    // 
    // var obj = {
    //     html:`<p>abc<span style="color:red">789</span></p>`,
    //     skill:["JS","PS","CSS"]
    // }
    // 写入响应体内容
    // res.end(JSON.stringify(obj))
}).listen(65000)
// 0~65535
console.log("开启服务器")