//filter
//you have to check for even numbers in an array and put them in a seperate array

let numbers = [1,2,20,35,12,17,46]

//imperative way
let evenArray = []
for(let i = 0; i<numbers.length ; i++){
    if(numbers[i]%2==0){
        evenArray.push(numbers[i])
    }
}

console.log(evenArray)

//declarative way

//filter
//return a new array no mutatating
//return all those elements which satisfies a condition

let num = [1,2,20,35,12,17,46]

let evenNum = num.filter(function(n){
    return n%2==0
})

console.log(evenNum)

const transactions = [1000,4000,3000,2000,-898,3800,-4500];

const depositedAmount =transactions.filter(function(amount){
    return amount >0
})

console.log(depositedAmount)