var express = require("express");
var multer = require("multer");
var app = express();

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

// 配置上传参数
var upload = multer({
    storage: storage
})

app.post("/upload", upload.any(), function (req, res) {
    res.send("h w")
})
app.listen(8899)