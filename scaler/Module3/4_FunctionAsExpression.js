var a = 2+3
console.log(a)

var add = function(a,b){
    console.log(a+b)
}

add(3,4)  //call function by the name of the variable

//it doesn't have a name -> anonymous function
var add2 = function(a,b){
    return a*b
}
var result= add2(5,5)
console.log(result)

var product = add2  //pass expression in a variable
var res = product(6,6)
console.log(res)