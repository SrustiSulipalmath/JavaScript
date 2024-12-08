//Non strict mode

//console
console.log(this)  //{}  -> empty object

//inside a function  
function display(){
    console.log(this)   // global object  -> object in node which has all functions and methods
}

display()


//define a function inside an object

let myObj = {
    name: 'Srusti',
    age:22,
    myFunc:function(){
        console.log(this)  //refers to that object only
        console.log(this.name)
    }
}

myObj.myFunc()

//function inside a function inside a object

let myObj2 = {
    name: 'Srusti',
    age:22,
    myFunc2:function(){
            function myFunc3(){
                console.log(this) //global object
            }
             myFunc3()
    }

}

myObj2.myFunc2()