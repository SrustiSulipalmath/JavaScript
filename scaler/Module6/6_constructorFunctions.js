
//create multiple objects with same keys

//template - name,company,color-pass data and create multiple objects with same template
//template helps in creating multiple objects at a time
let car1 = {
    name : 'X4',
    company : 'BMW',
    color : 'Red'

}

let car2 = {
    name : 'S-class',
    company : 'Mercedes',
    color : 'White'

}

function createCar(_name,_company,_color){  //parametrs
    this.name = _name  //creating 1 key for empty object
    this.company = _company
    this.color=_color  //keys

    this.drive = function(){
        console.log(`I am driving ${this.name} and it is of ${this.color} color`)
    }
}

let car_1=new createCar('X4','BMW','Red')

console.log(car_1)
car_1.drive()