let sum = function(x,y){
    console.log(x+y)
}

sum(2,3)

//many operators to pass

let sumCurried = function(x){
    return function(y){
        console.log(x+y)
    }
}

let sumTwoNumbers = sumCurried(2)
console.log(sumTwoNumbers)

sumTwoNumbers(3)