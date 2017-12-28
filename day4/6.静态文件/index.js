var express = require("express");
var app = express();
// 制定public为静态文件存放的地方
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.static('video'));
app.use(express.static('audio'));
app.get("/",function(req,res){
    res.send("hello world")
});
app.listen(8888);

