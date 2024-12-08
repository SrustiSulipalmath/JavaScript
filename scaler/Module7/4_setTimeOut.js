// setTimeout(callback,time)

//asynchronous function


console.log('Before')
function greet(){
    console.log('Hello from setTimeout')
}

setTimeout(greet,5000)

console.log('After')