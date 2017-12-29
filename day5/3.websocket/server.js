var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    // socket.on('event', function (data) {

    // });
    var num = 1;
    setInterval(function(){
        socket.emit("getData",num)
        num++
    },1000)

    // 后端在监听
    socket.on("sendMess",function(data){
        console.log(data)
    })
});
server.listen(3000);
console.log("开启服务器")