//you need the sum of every element in an array


//imperative way
let num = [1,2,20,35,12,17,46]

let sum=0
for(let i=0; i<num.length;i++){
    sum = sum+num[i]
}
console.log(sum)

//declarative way 
//reduce method

let result = num.reduce(function(acc,value){
    let updatedSum = acc+value
    return updatedSum
},0)

console.log(result)

let nums = [5,4,3,2,1]

let results = nums.reduce(function(acc,value){
    let updatedProduct = acc*value
    return updatedProduct
},1)

console.log(results)

