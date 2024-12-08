var person = { //properties
    firstName : "Srusti",
    secondName : "Gsm",
    age : 22,
    ownsCar : false
}

console.log(person)

//access the object
console.log(person.age)

//bracket notation

console.log(person['firstName']) //pass key inside to get a value

var captain = {
    firstName : "Steve",
    secondName : "Rogers",
    age : 102,
    friends : ['Bucky Barnes','Bruce','Tony'], //array inside an object
    isAvenger : true,
    address : {
        state : 'India',
        city :{
            Name : 'Banglore',
            pincode : 123456
        }

    }

}

//access friends array 

console.log(captain.friends[1])

console.log(captain.address.city.Name)
console.log(captain)
captain.isAvenger = false
console.log(captain)
captain.movies = ['age of ultron','civilwar','first avenger']
console.log(captain)

//delete properties 
delete captain.age 
console.log(captain)