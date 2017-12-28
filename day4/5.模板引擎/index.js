var express = require("express");
var app = express();
//views, 放模板文件的目录，比如： 
app.set('views', './views');
//view engine, 模板引擎，比如： 
app.set('view engine', 'jade');
app.get("/", function (req, res) {
    //res.send("hello world");
    res.render('index', {
        title: 'Hey',
        message: 'Hello there!'
    });
}, function (err, req, res) {
    res.status(500);
})
app.listen(7777);
// css (sass)
// html (jade)
// js (typecsript)