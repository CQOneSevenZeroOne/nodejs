var https = require("https")
var fs = require("fs")

https.get("https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1514277965&di=b69725c6d06ecf9ba5df4e73dbe8fea8&src=http://image.tianjimedia.com/uploadImages/2015/209/42/6H182F668EP9.jpg",function(res){
    var writerStream = fs.createWriteStream('1.jpg');    
    res.pipe(writerStream)
})