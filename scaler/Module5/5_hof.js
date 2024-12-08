//find 
//works as a filter
//returns only the first element of the array which satisfies the conditions


const transactions = [1000,4000,3000,2000,-898,3800,-4500];
let firstWithdrawl = transactions.find(function(n){
    return n<0
})

console.log("firstwithdrawl ->",firstWithdrawl)
//findindex

let firstWithdrawlIndex = transactions.findIndex(function(n){
    return n<0
})

console.log("index ->",firstWithdrawlIndex)


