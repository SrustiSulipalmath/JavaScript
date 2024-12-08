//strings are also indexed
//iterable values
//arrays and strings

var scores = [60,90,80,75]
//specifying the value of this 

for(var score of scores){
    console.log(score)
}

//access indexes of the arrays

let colors = ['Yellow','Green','Orange','Pink']

//pass array instead of variable
for(var [index, color] of colors.entries()){
    console.log(index+ '-> ' +color)
}

//with strings

var str = 'Srusti'
for(var c of str){
    console.log(c)
}

//maniplulate score 


for(var score of scores){
    score = score+5
    console.log(score)
}
