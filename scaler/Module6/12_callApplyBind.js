let person1 = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102,

    // printDetails : function(){
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and i am ${this.age} years old`)
    // }
}

// let printDetails = function(){   function globally written
//     console.log(`Hi I am ${this.firstName} ${this.lastName} and i am ${this.age} years old`)
// }

let printDetails = function(city,power){
    console.log(`Hi I am ${this.firstName} ${this.lastName} 
    i am ${this.age} years old i am from ${city} and i have ${power}`)
}
let person2 = {
    firstName : 'Tony',
    lastName : 'Rogers',
    age : 41,

    // printDetails : function(){
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and i am ${this.age} years old`)
    // }
}

// person1.printDetails()

// person2.printDetails()

//call

// person1.printDetails.call(person2)  //dependency

// printDetails.call(person2)
printDetails.call(person2,'New York','Iron Man Armour')

printDetails.apply(person2,['New York','Iron Man Armour'])

//bind method

let myfunc = printDetails.bind(person2,'New York','Iron Man Armour')
console.log(myfunc)

myfunc()
