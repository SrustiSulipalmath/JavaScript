function test(){
    let a = 2

    function test1(){
        console.log(a)
    }//this function will always have access to its outer scope

    return test1  //taking it out and returning
}

let fun = test()  //when it is called outside but also it has access to its outer scope
console.log(fun)
fun()