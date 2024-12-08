//asynchronous function

function hello(){
    console.log('Hello')
}

let timer = setInterval(hello,1000)  //variable

setTimeout(function(){
    clearInterval(timer)
},3000)