
//creates seperate reference

let firstPerson = {
    name : 'Srusti',
    age : 22,
    address : {
        city : 'Lucknow',
        state : 'UP'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson))

console.log(firstPerson)
console.log(secondPerson)


firstPerson.name = 'Harish'
secondPerson.address.city = 'Delhi'


console.log(firstPerson)
console.log(secondPerson)