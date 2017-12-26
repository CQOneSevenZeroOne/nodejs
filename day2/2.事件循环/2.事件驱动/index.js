var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

eventEmitter.on('maipisa', function(){
    setTimeout(function(){
        console.log("买披萨")
        // 触发约会
        eventEmitter.emit('yuehui');
    },1000)
});

eventEmitter.on('yuehui', function(){
    setTimeout(function(){
        console.log("见女朋友，和女朋友吃披萨")
        // 触发寄快递
        eventEmitter.emit('jikuaidi');
    },1000)
});

eventEmitter.on('jikuaidi', function(){
    setTimeout(function(){
        console.log("和女朋友寄快递")
    },1000)
});

// 触发买披萨
eventEmitter.emit('maipisa');