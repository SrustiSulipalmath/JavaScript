//Methods and properties from base class can be put down or can be passed into derived classes

class person{
    constructor(_name,_age){
        this.name = _name
        this.age=_age
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class teacher extends person{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this.classStrength = _classStrength
    }

    test(){
        super.welcome()
    }
}

class student extends person{
    constructor(_name,_age,_cgpa){
        super(_name,_age)
        this.cgpa = _cgpa
    }
}


let person1 = new person('Srusti',22)
console.log(person1)
let teacher1 = new teacher('RamPrasad',45,75)
console.log(teacher1)
teacher1.test()
let student1 = new student('Srujana',13,8.8)
console.log(student1)