//Async Await - keywords
//will always works with function

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
        resolve(`${order} and is served`)
    })
}

async function serveOrder(){

    try{
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }
    catch(error){
        console.log(error)
    }

    
}

serveOrder()
