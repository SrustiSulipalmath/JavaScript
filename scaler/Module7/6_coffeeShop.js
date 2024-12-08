function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('Order for coffee received')
        }
        else{
            reject('other orders rejected')
        }
    })
}


function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`${order} is served`)
    })
}

placeOrder('coffee').then(function(orderPlaced){
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced)
    return orderIsProcessed
}).then(function(processedOrder){
    console.log(processedOrder)
}).catch(function(err){
    console.log(err)
}) //chaining of promise
