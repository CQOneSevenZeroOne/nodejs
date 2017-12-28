var http = require("http");
var url = require("url");
var querystring = require("querystring");
var mysql = require("mysql");
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
connection.connect();
http.createServer(function(req,res){
    // 1.cors 2.jsonp 3.window.domain
    res.setHeader("Access-Control-Allow-Origin","*")
    // script src  link href  img src  a href
    // name=laoyao&skill=ps
    var query = url.parse(req.url).query
    // {name:laoyao,skill:ps}
    var param = querystring.parse(query)

    // 路由
    var pathname = url.parse(req.url).pathname

    switch(pathname){
        case "/getName":
            connection.query(`SELECT * FROM students where id = ${param.id}`, function (error, results, fields) {
                if (error) throw error;
                console.log('The solution is: ', results);
                res.end(JSON.stringify({
                    name: results[0].name
                }))
            });
        break;

        case "/getAge":
            connection.query(`SELECT * FROM students where id = ${param.id}`, function (error, results, fields) {
                if (error) throw error;
                console.log('The solution is: ', results);
                res.end(JSON.stringify({
                    age: results[0].age
                }))
            });
        break;
    }

    //console.log(param)
    //console.log(`SELECT * FROM students where id = ${param.id}`);
}).listen(6789);
console.log("开启服务器")