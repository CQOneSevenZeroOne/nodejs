var http = require("http");
//console.log(http)
http.createServer(function(req,res){
    res.end("hello world")
}).listen(12345)
//echo "hello world"