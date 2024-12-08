function printFirstName(firstname,cb){
    console.log(firstname)
    cb('Gsm')
}

// printFirstName('Srusti')
printFirstName('Srusti',printLastName)

function printLastName(lastname){
    console.log(lastname)
}

// printLastName('Gsm')

const isEven = (n)=>{
    return n%2==0
}

let result = (evenFn , num) =>{
    const isNumEven = evenFn(num)
    console.log(`The number ${num} is an even number ${isNumEven} `)
}

result(isEven , 16)