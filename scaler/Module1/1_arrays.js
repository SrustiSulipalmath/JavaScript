var arr = [12,'Ferrari',true,12.4]
console.log(arr)
var a = arr[1]
console.log(a)
console.log(arr[3])
arr[1] = 'Bentley'
console.log(arr)
console.log(arr.length)

//inbuilt js array methods

var arr2 = [12,14,56,57]
console.log(arr2)
var c = arr2.pop() //take out last elemnt
console.log(arr2)
console.log(c)
arr2.push(100)//add 1 element to the end of the array
console.log(arr2)
arr2.shift()//removes element from the start of the array
console.log(arr2)
arr2.unshift(102)//adds element at the start of the array
console.log(arr2)