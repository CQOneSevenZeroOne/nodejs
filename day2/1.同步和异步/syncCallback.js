// 同步有回调
console.log(1);
console.log(2);
function a(callback){
    setTimeout(function(){
        callback()
    },1000)
}
// a是同步函数，不是异步函数
a(function(){
    console.log(3);
})
console.log(4);
