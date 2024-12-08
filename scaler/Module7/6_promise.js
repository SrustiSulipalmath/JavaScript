//how to produce a promise
//call abck functions - resolve,reject
//resolve - fulfills , reject - rejected



// let myPromise = new Promise(function(resolve,reject){
//     const a = 4
//     const b = 4

//     setTimeout(()=>{
//         if(a===b){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     },2000)
// })

//pending state
// console.log(myPromise)


let myPromise = new Promise(function(resolve,reject){
    const a = 4
    const b = 5

    setTimeout(()=>{
        if(a===b){
            resolve('The values are equal')
        }
        else{
            reject('The values are not equal')
        }
    },2000)
})


//fulfilled state - then method

myPromise.then(function(result){
    console.log(result)
})

//reject 
//consuming the promise
myPromise.catch(function(failedresult){
    console.log(failedresult)
})

//your promise will get settled