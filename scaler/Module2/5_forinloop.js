var colors = {
    primary : 'Blue',
    secondary : 'Red',
    tertiary : 'White'
}

for(var color in colors){
    console.log(color + '-> '+ colors[color])
}
//color variable will specify each and every key

var colorsArray = ['Yellow','Green','Orange','Pink']
for(color in colorsArray){
    console.log(color + '-> ' +colorsArray[color])
}