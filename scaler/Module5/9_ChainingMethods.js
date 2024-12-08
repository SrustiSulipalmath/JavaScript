let arr = [
    {name: "A", age:14,gender:"M"},
    {name: "B", age:34,gender:"M"},
    {name: "C", age:24,gender:"F"},
    {name: "D", age:44,gender:"F"},
    {name: "E", age:44,gender:"M"},
    {name: "F", age:28,gender:"F"},
    {name: "G", age:36,gender:"M"},
    {name: "H", age:47,gender:"F"},
]

//taking an output from one method and passing as input for another method in a same line

//Age of all the Men(Males)

let males = arr.filter(function(obj){
    return obj.gender == 'M'
})

console.log(males)

let ageOfmales = males.map(function(male){
    return male.age
})

console.log(ageOfmales)

let malesages = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(male){
    return male.age
})

console.log(malesages)

const transactions = [1000,4000,3000,2000,-898,-3800,-4500];

//From the transactions array filter out positive elements and calculate the total amount
//use the filter and reduce to achieve thus

let sum = transactions.filter(function(n){
    return n>0
}).reduce(function(acc,value){
    updatedSum = acc+value
    return updatedSum
},0)

console.log(sum)