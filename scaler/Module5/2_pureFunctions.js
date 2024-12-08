var a = 4
a=10
// function addImpure(x){
//     console.log(x+a)
//     a++
// }  //Impure Function

// addImpure(2)
// addImpure(2)

//Pure Function

// function addpure(x){
//     console.log(x+a)
// }

// addpure(2)
// addpure(2)

function addpure(x,a){
    return x+a
}

console.log(addpure(4,5))

