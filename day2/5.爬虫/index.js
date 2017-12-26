var http = require("http");
var cheerio = require("cheerio");
http.get("http://www.qfedu.com", function (res) {
    var data = "";
    res.setEncoding('UTF8');

    // 处理流事件 --> data, end, and error
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        var $ = cheerio.load(data)
        //console.log(data);
        $("img").each(function(index,ele){
            console.log($(ele).attr("src"))
        })
    });
})