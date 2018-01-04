var express = require("express");
var mysql = require("mysql");
// 处理post请求的请求体模块
var bodyParser = require('body-parser')
//var cheerio = require("cheerio");
// 用express实例化app对象
var app = express();
//console.log(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.append("Access-Control-Allow-Origin","*");
    console.log(req.query)
    res.send('hello world');
});
app.get('/laoyao', function(req, res) {
    res.append("Access-Control-Allow-Origin","*");
    console.log(req.query)
    res.send('laoyaohenshuai');
});
app.post('/index', function(req, res) {
    res.append("Access-Control-Allow-Origin","*");
    console.log(req.body)
    res.send('index');
});
app.listen(3000)