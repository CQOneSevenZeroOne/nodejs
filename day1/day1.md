# Nodejs

- 其实就是脱离了chrome浏览器的一个控制台
- chrome浏览器的控制台输入什么代码执行，nodejs也相应的执行对应的代码，知识chrome浏览器有一个用户可视化的网页界面，nodejs没有


### node VS chrome

```js
console.log(1)
1//log
```

|前端|后端|后端|
|-|-|
|客户端|服务端|服务端|
|浏览器|nodejs|apache|
|JS|JS|php|


# 执行nodejs

前端：新建一个*index.js*，然后利用*index.html*引入*index.js*文件，然后通过浏览器执行该JS

后端：在命令行用node命令，对应执行`node index.js`就可以执行该JS并输出结果
```
dir//找出该目录下要执行的JS文件
node xxx.js//或者node xxx
```

# 模块

### 自定义模块

> 自己去编写的模块

前端的模块化：`require.js` `define require

后端的模块化：`module.exports require`

|前端|后端|
|-|-|
|引入reqiure.js|不需要引入任何JS|
|`define和require`|`module.exports和require`|

### 第三方模块

> 别的开发者已经写好给你的模块(插件)

npm模块应用商店

|前端|后端|
|-|-|
|jQuery/require.js|gulp|

在[npm模块管理中心](https://www.npmjs.com/)寻找对应的模块，在对应的js文件里面引入

1.利用npm命令安装模块
```bash
npm install jquery
npm install gulp
```

2.新建test.js，把第三方模块引入进来

```js
var gulp = require("gulp")
console.log(gulp)

var $ = require("jquery")
console.log($)
```

3.在控制台运行test
```js
node test
```

### 内置模块

[内置模块](http://nodejs.cn/api/)官方文档

不用需要npm中心下载，是nodejs自带的模块，直接引入模块名字就可以使用，常用的内置模块有`http,fs,os,path,querystring,url`

# 创建服务器

```js
// 引入内置模块http，并赋值给http变量
var http = require("http");
// 利用createServer来创建服务器
http.createServer((req,res)=>{
    // 添加响应头，允许跨域
    res.setHeader("Access-Control-Allow-Origin","*")
    var obj = {
        html:`<p>abc<span style="color:red">789</span></p>`,
        skill:["JS","PS","CSS"]
    }
    // 写入响应体内容
    res.end(JSON.stringify(obj))
}).listen(65000)
// 0~65535
console.log("开启服务器")
```