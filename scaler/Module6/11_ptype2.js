// function person(_name,_age){
//     this.name = _name
//     this.age =  _age

//     this.getNameAndAge = function(){
//         console.log(`I am ${this.name} and my age is ${this.age}`)

//     }
// }

// let person1 = new person('Adam',24)
// let person2 = new person('Steve',25)

// console.log(person1)
// console.log(person2)


function person(_name,_age){
    this.name = _name
    this.age =  _age
}

person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)

}


let person1 = new person('Adam',24)
let person2 = new person('Steve',25)

console.log(person1)
console.log(person2)
console.log(person1.getNameAndAge())


