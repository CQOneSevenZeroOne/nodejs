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

