// spread operator {...} 3 dots

//does not affect
//takes out first person properties and creates new object

let firstPerson = {
    name : 'Srusti',
    age : 22,
    address : {
        city : 'Lucknow',
        state : 'UP'
    }
}

let secondPerson ={...firstPerson} 

console.log(firstPerson)
console.log(secondPerson)


firstPerson.name = 'Harish'
secondPerson.address.city = 'Delhi'


console.log(firstPerson)
console.log(secondPerson)