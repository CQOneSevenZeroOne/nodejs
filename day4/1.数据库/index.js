var mysql = require("mysql");
//var cheerio = require("cheerio");
//var gulp = require("gulp");
//console.log(mysql);

// 创建连接
var connection = mysql.createConnection({
    // 域名
    host: 'localhost',
    // 用户名
    user: 'laoli',
    // 密码
    password: '12345678',
    // 数据库
    database: 'cq1701'
});

// 进行连接数据库
connection.connect();

// 执行sql语句，并异步查找数据库数据
connection.query('SELECT * FROM `students`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end();
console.log("执行数据库操作完毕")