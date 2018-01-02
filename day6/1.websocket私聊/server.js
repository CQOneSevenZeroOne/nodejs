var http = require('http');
var server = http.createServer();
var io = require('socket.io')(server);

var userList = [];

io.on('connection', function (socket) {
    socket.on("addUser", function (data) {
        console.log(socket.id)
        console.log(data)
        userList.push({
            id: socket.id,
            name: data.name
        })
        io.emit("showUserList", userList)
    })
    //console.log(socket.id)
    //console.log(io)
    socket.on('sendMess', function (data) {
        console.log(data)
        // 公聊
        //io.emit('returnMess', data)
        // 私聊
        io.sockets.sockets[data.id].emit("returnMess",{
            name:data.name,
            message:data.message
        })
    });
})

server.listen(3333);
console.log("开启服务器")