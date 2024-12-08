//fs module - reas file sync

const fs = require('fs')

console.log('First Line')

let data = fs.readFileSync('1_f1.txt')
console.log('File 1 Data -> '+data)




console.log('Last Line')