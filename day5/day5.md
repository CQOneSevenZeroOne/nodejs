# multer文件上传

- [uploadFiles](https://github.com/Wscats/node-tutorial/tree/master/uploadFiles)
- [npm](https://www.npmjs.com/package/multer)
- [中文文档](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)

1. 引入multer
```js
var multer = require("multer");
```
2. 配置上传文件的参数
```js
var storage = multer.diskStorage({
    // 存储文件的地方
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    // 存储文件的名字定义方案
    filename: function (req, file, cb) {
        console.log(file.originalname.split("."))
        var fileFormat = file.originalname.split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1])
    }
})
```
3. 配置上传路由
```js
app.post("/upload", upload.any(), function (req, res) {})
```
4. 监听端口
```js
app.listen(8899)
```

# 百度地图

利用navigator对象的geolocation，因为这是需要谷歌地图的服务，在国内有墙，无法使用

```js
navigator.geolocation.getCurrentPosition(function(data){
    // 成功定位
    console.log(data)
},function(err){
    // 失败回调
    console.log(err)
})
```

在国内用地图服务，推荐用百度地图

[百度地图文档](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/helloworld)

1.注册百度账号，申请[AK](http://lbsyun.baidu.com/apiconsole/key)

2.编写页面
```js
<!-- 移动端适配 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 地图节点-->
<div id="map"></div>
<!--配置样式-->
<style>
    * {
        margin: 0;
        padding: 0
    }

    body,
    html {
        height: 100%;
        width: 100%;
    }

    #map {
        height: 50%;
        width: 100%;
    }
</style>
```

3.引入百度地图JS

```js
<script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=gs26sVAjaYcfnvWG7FfWuxYmb4O9SX8z"></script>
```

4.编写逻辑

```js
<script type="text/javascript">
    var map = new BMap.Map("map");
    // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915);
    // 创建点坐标  
    map.centerAndZoom(point, 8);
    // 初始化地图，设置中心点坐标和地图级别
</script>
```

# websocket

后端需要安装socket.io的模块
```js
npm install socket.io
```
后端配置
```js
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.on('event', function (data) {

    });
});
server.listen(3000);
console.log("开启服务器")
```


前端需要引入`socket.js`

```html
<script src="https://cdn.socket.io/socket.io-1.4.4.js"></script>
```


```js
// 监听
socket.on("事件名字",function(){})
// 触发
socket.emit("事件名字",消息)
```