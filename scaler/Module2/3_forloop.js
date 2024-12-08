var a = 'Hello'
//for loop
for (var i = 0; i<=10;i++){
    console.log(a)
}

//square each element of an array
var num = [2,3,4,5,6,7,8]
var squaredArr = [] //empty array
for(var i=0;i<num.length;i++){
    console.log(i*i)
     squaredArr.push(num[i]*num[i])
}
console.log(squaredArr)