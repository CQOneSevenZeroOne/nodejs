# 同步

# 异步

|前端|后端|
|-|-|
|浏览器端|服务器端|
|`ajax和定时器能实现异步`|fs.readFile()|

- 同步：买披萨的时候，那个人要傻傻等三十分钟（一定能收到披萨），再去泡妞

- 异步：买披萨的时候，放下一个手机号码（回调函数），先去泡妞，三十分钟，服务员回拨电话（触发回调），再拿披萨

# 事件驱动


```js
// 原生的events模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 定义并监听事件
eventEmitter.on('maipisa', function(){});
// 触发事件
eventEmitter.emit('maipisa');
```

# 流

> 字符串文本(html,js,css,txt)
```js
// 获取文本
var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('./input.txt');
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('output.txt');
    // 使用 utf8 编码写入数据
    writerStream.write(data,'UTF8');
    // 标记文件末尾
    writerStream.end();
});
```

> 音频，视频，图片
```js
// 获取文本
var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('./input.mp4');
var writeStream = fs.createWriteStream('./output.mp4');
readerStream.pipe(writeStream)
```

# 下载或者爬虫
```js
var http = require("http")
http.get("资源路径",function(res){
    //res 可读流
    //1.字符串
    //res.on(data)...
    //2.非字符串
    //res.pipe()
})
```
cheerio第三方模块，cheerio是jquery的后端版本
```
npm install cheerio
```

爬虫，就是爬取网上有用的信息，收集并进行分析
```js
var $ = cheerio.load(data)
$("img")
$("p")
```