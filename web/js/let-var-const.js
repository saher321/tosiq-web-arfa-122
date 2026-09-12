var name = "Taha"
var name = "Tosiq"
// console.log(name)
// re-declared and re-initialized


let country = "Pakistan"
country = "USA"
// console.log(country)
// can not be re-declared but we can re-initialized

const status = "active"
// status = "inactive"
// console.log(status)
// can not be re-declared and can not be re-initialized


var x = 10 
{
    x = 20
}
console.log(x)
// global scope , output = 20

let a = 5
function show(){
    let b = 10
    console.log("b= ", b)
}
console.log(a)
// block scope , output = 5
