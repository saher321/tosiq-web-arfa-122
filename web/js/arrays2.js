// length, sort(), shift(), 
// unshift(), push(), pop(), 
// flat(), splice(), toSpliced()
// toString(), isArray(), concat()
// map(), filter(), find(), reduce()

const cities = ["Lahore", "Karachi", "Multan", "Islamabad", "Sargodha"]
const names  = ["Ali", "Samantha", "Carlos", "July", "Alice", "John"]
const sets = [[1,2], [3,4], [5,6]]

// console.log(cities[0])
// console.log(cities.length)
// console.log(cities.sort())
// cities.shift() // lahore eleminated
// cities.unshift("Peshawar")
// cities.push("Faislabad")
// cities.pop()
// console.log(cities)
// const newArray = cities.concat(names)
// console.log(newArray)
// console.log(sets.flat()) // [1,2,3,4,5,6]

// opt       i, mode, value(optional)
// mode 0 => replace, 1 => remove
// names.splice(3, 1, "new value")
// const newArray = names.toSpliced(1, 1, "Apple", "KIWI", "MANGO")
// console.log(newArray)
let str = names.toString()
console.log(str)

const status = Array.isArray(str)
if(status) {
    console.log(str)
} else {
    console.log("Given data isn't an array")
    const strToArray = str.split(",")
    console.log(strToArray)
}