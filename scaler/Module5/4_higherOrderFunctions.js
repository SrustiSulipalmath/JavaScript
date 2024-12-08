let arr = [ 1,2,3,4,5]

let squaredArr = []

for(let i = 0; i<arr.length ; i++){
    squaredArr.push(arr[i]*arr[i])
}

console.log(squaredArr)

//map

//map will loop through every element of your array and perform specific function 
//map will return you a new array with your results
const num = [1,2,3,4,5]
const squaredNum = num.map(function(n){
    return n*n
})

const transactions = [1000,4000,3000,2000,-898.3800,-4500];

const inrtoDollar = 80;

let transactionsInDollars = transactions.map((amount)=>{
    return (amount/inrtoDollar).toFixed(0)
})
console.log(transactionsInDollars)

let transactionsInDollars1 = transactions.forEach((amount)=>{
    return (amount/inrtoDollar).toFixed(0)
})  //it won't return anything  it doesn't return new array it returns a single value

console.log(transactionsInDollars1)