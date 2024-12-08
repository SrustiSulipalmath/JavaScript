let myObj = {}

console.log(myObj)

let person1 = {
    name : 'Srusti',
    age : 22
}

console.log(person1)
console.log(person1.hasOwnProperty('name'))  //method


//constructor function

function person(_name,_age){
    this.name = _name
    this.age =  _age
}

let person2 = new person('Srujana,13')
console.log(person2)  //person2 object will have it's own prototype  every object will get it's own