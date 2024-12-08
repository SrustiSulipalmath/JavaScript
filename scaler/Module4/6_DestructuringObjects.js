

let myObj = {
    name : 'Adam',
    age : 25,
    gender : 'male'
}

//array []
//objects {}

let {name,age:a,z} = myObj
//pass same key names 
console.log(name)
console.log(a)  //alternate names
console.log(z)


//nested objects

let myObj1 = {
    name : 'Adam',
    age : 25,
    gender : 'male',
    address : {
        country :'England',
        city : 'London'
    }
}
// let {p,q,r,address} = myObj1
// console.log(address)
let {p,q,r,address:{country:c}} = myObj1
console.log(c)