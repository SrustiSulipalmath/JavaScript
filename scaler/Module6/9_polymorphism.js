//poly - many  morph-forms ism - method/behaviours

class Animal{

    sound(){
        console.log('Animals make different sounds')
    }
}

class Dog{

    sound(){
        console.log('Dog barks')
    }
}

class Cat{

    sound(){
        console.log('Cat meows')
    }
}

let animal1 = new Animal()
animal1.sound()

let tommy = new Dog()

let percy = new Cat()

tommy.sound()
percy.sound()