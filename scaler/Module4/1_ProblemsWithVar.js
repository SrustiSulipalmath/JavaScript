var a = 21  //declaration of a variable
var a = 35  //redeclaration of a variable
console.log(a)

if(a===35){
    var b = 40
    console.log(b)
}

console.log(b) //accessing variable outside of the block scoping issue

//variables declared with var keword are not blocked scope they are function scope

function test(){
    var c = 100
    console.log(c)
}

//console.log(c)