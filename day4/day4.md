## 数据库

1.安装`mysql`第三方模块

```bash
npm install mysql
```

2.引入`mysql`第三方模块
```js
var mysql = require("mysql");
```

3.创建连接配置
```js
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
```

4.执行连接

```js
// 进行连接数据库
connection.connect();
```

5.执行sql语句查询

这里查找数据库是异步的，这是优势也是劣势
```js
connection.query('SELECT * FROM `students`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
```

6.关闭数据库

```js
connection.end();
```

# express

高度包容、快速而极简的 Node.js Web 框架
```js
npm install express
```

初始化一份`package.json`文件,这是我们nodejs项目的描述文件，我们可以在上面看到这个项目的一些基本信息，比如它需要依赖的第三方模块

```js
npm init
npm install xxx --save
//移植后
npm install
```

GET请求
```js

```

# jade模板引擎

参考文档
- [为 Express 开发模板引擎](http://expressjs.com/zh-cn/advanced/developing-template-engines.html)
- [JADE LANGUAGE](http://jade-lang.com/)

全局安装会多一个，jade命令
```js
npm install jade -g
```
新建index.jade文件，比如内容如下
```jade
body
    meta
    html
        div
            p= title
            p= message
        div#name.red= title
        div 你好
        script console.log("a")
```
用jade命令可以把jade文件转化为html格式文件
```jade
jade xxxx.jade xxxx.html
```

# 静态文件

制定一个文件夹作为静态资源存放的地方
```js
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.static('video'));
app.use(express.static('audio'));
```