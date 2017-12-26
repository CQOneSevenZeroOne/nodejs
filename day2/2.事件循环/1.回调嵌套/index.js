// 回调地狱

function maipisa(callback){
    setTimeout(function(){
        callback()
    },1000)
}
maipisa(function(){
    console.log("买披萨")
    setTimeout(function(){
        console.log("见女朋友，和女朋友吃披萨")
        setTimeout(function(){
            console.log("和女朋友寄快递")
        },1000)
    },2000)
})


// setTimeout(function(){
//     console.log("见女朋友，和女朋友吃披萨")
// },1000)

// setTimeout(function(){
//     console.log("和女朋友寄快递")
// },1000)