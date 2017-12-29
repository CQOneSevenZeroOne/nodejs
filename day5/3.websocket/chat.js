var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.on('sendMess', function (data) {
        io.emit('returnMess',data)
    });
});
server.listen(3000);
console.log("开启服务器")