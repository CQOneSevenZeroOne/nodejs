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
