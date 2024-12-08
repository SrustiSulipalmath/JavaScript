
    function person(_name,_age){
        var name = _name
        this.age = _age

        this.getName = function(){
            return name
        }
    }

    let person1 = new person('Srusti',22)
    console.log(person1)
    person1.name = 'Srujana'
    console.log(person1)
    console.log(person1.getName())
    
