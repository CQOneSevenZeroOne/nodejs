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