//works as a template

//create multiple person objects
class person{
    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

//same keys with different values

let person1 = new person('Srusti',22)
let person2 = new person('Srujana',13)
let person3 = new person('Ranjitha',25)


console.log(person1)
person1.welcome()
console.log(person2)
person2.welcome()
console.log(person3)
person3.welcome()