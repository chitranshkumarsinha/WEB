function greet(name){
    console.log(`Hello guys my name is ${name}`);
}
// greet('tukku')


function maketea(typeoftea){
    return `Making of ${typeoftea}`

}
let tea = maketea('lemon tea')
// console.log(tea)


//important
function orderTea(teatype){
    function confirmorder(){
        return `order confirmed`
    }
    return confirmorder()
}
let a = orderTea('lemon tea')
// console.log(a)
//


// const calculateTotal = (price,quantity) => {
//     return price * quantity
// }
//above arrow function can also be written in following way
const calculateTotal = (price,quantity) => price * quantity
let totalcost = calculateTotal(499,100)
// console.log(totalcost)


function processTeaOrder(teafunction){
    return teafunction('earlGrey')
}
let one = processTeaOrder(maketea)
// console.log(one)
//anything that takes function as argument are known as higher order function



function Createteamaker(){
    return function(teatype){
        return `making ${teatype}`
    }
    // return (x)
}
let teamaker = Createteamaker() // this variable is holding a function definition
// console.log(teamaker('green Tea'))
// i have doubt in line 52