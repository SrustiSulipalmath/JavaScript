//some 
//method returns boolean value based on the condition 
// it returns true if atleast any 1 value satisifies the condition

const transactions = [-1000,-4000,-3000,2000,-898,-3800,-4500];

let result = transactions.some(function(n){
    return n>0
})

console.log(result)

//every
//it returns true if every element satisfies the condition

let res = transactions.every(function(n){
    return n>0
})

console.log(res)