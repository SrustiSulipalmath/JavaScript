const fs = require('fs')

console.log('First Line')

fs.readFile('1_f1.txt',cb1)

function cb1(err,data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data -> '+data)
}

fs.readFile('2_f1.txt',cb2)

function cb2(err,data){
    if(err){
        console.log(err)
    }
    console.log('File 2 data -> '+data)
}

fs.readFile('3_f1.txt',cb3)
function cb3(err,data){
    if(err){
        console.log(err)
    }
    console.log('File 3 data -> '+data)
}

console.log('Last Line')



//no order