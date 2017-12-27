// 引入内置模块http，并赋值给http变量
var http = require("http");
var querystring = require("querystring");

http.createServer((req, res) => {
    var post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        post += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        console.log(post)
        post = querystring.parse(post);
        console.log(post)
        res.end("success")
    });
}).listen(65000)
console.log("开启服务器")