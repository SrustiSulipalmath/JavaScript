function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}

// add(2,3)
// sub(3,2)
// mul(4,4)
// div(4,2)

module.exports = {
    addition : add,
    subtraction : sub,
    multiplication : mul,
    division : div
    
}