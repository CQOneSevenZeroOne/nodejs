// 引入内置模块http，并赋值给http变量
var http = require("http");
// 获取前端请求的url数据
var url = require('url');
// 处理url上的参数，把它转为js对象
var querystring = require("querystring")
// 利用createServer来创建服务器
var fs = require("fs")
http.createServer((req,res)=>{
    // 解决跨域
    // res.setHeader("Access-Control-Allow-Origin","*")
    // 1.  /?name=laoyao&skill=js
    // console.log(url.parse(req.url))
    // 2.  name=laoyao&skill=js

    // console.log(url.parse(req.url).query)
    var query = url.parse(req.url).query

    // 3.  name=laoyao&skill=js转为对象{name:laoyao,skill:ps}
    // console.log(querystring.parse(query))
    var param = querystring.parse(query)

    // 4.路由
    console.log(url.parse(req.url).pathname)
    switch(url.parse(req.url).pathname){
        case "/":
            res.end("1");
            break;
        case "/Wscats":
            res.end("Wscats");
            break;
        case "/getTitle":
            res.end("news");
            break;
        case "/getList":
            res.end(JSON.stringify({
                news:["a","b","c"]
            }));
            break;
        default:
        fs.readFile("."+url.parse(req.url).pathname,function(err,data){
            res.end(data)
        })
    }
}).listen(7777)
// 0~65535
console.log("开启服务器")