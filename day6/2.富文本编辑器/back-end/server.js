var express = require("express");
var fs = require("fs");
// var mysql = require("mysql");
// 处理post请求的请求体模块
var bodyParser = require('body-parser')

// 用express实例化app对象
var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.post('/getHtml', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    res.send('index');
    fs.writeFile("./dist/test.html", req.body.html, function () {
        console.log("写入成功")
    })
});

app.get('/showHtml', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //console.log(req.body)
    //res.send('index');
    fs.readFile("./dist/test.html", function (err, data) {
        console.log(data.toString())
        res.send(data.toString());
    })
});

app.get('/show', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //console.log(req.body)
    res.send('index');
    // fs.readFile("./dist/test.html", function (err, data) {
    //     console.log(data)
    //     res.send(data);
    // })
});
app.listen(3000)