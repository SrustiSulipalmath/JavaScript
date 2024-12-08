
let a =3
let test1 = function(){
    console.log(1)
}
let test2 = function(a){
    console.log(a+2)
}

let test3 = function(a,b){
    console.log(a+b)
}

test1()
test2(8)
test3(5,5)

let test4 = ()=>{
    console.log("arrow function")
}
test4()
 
let test5 = a =>{
    console.log(a+2)
}
test5(8)

let test6 = a => console.log(a+2)
test6(9)