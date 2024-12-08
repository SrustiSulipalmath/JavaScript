//Imperative way of writing code

const a = 5
aSquared = a*a
let iseven;

if(aSquared % 2==0){
    iseven=true
}
else{
    iseven=false
}

console.log(iseven)

//Declarative way of writing code

const checkForSquare = (x) => (x*x%2 ===0? true : false)

console.log(checkForSquare(4))