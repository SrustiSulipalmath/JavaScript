

// function greet(){
//     let name = 'Srusti'

//     function displayName(){
//         console.log('Hi '+name)
//     }
//     return displayName
// }

// let g1 = greet()

// g1()

function greet(){
    let name = 'Srusti'

    function displayName(){
        console.log('Hi '+name)

        let age = 25
        function displayAge(){
            console.log('my age is '+age)
        }

        return displayAge
    }
    return displayName
}

let g1 = greet()

g1()

let g2 = g1()

console.log(g2)

g2()