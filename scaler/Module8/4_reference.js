let firstPerson = {
    name : 'Srusti',
    age : 22
}

let secondPerson = firstPerson

console.log(firstPerson)
console.log(secondPerson)


firstPerson.name = 'Harish'


console.log(firstPerson)
console.log(secondPerson)
//mutable - objects 

//not assigning value,assigning pointer
//pointer maps to location 
//both maps to same location