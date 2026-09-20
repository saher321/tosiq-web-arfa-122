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
// const newArray = [...cities, ...names, "new item"]
// console.log(newArray)
// const newArray = cities.concat(names)
// console.log(newArray)
// console.log(sets.flat()) // [1,2,3,4,5,6]

// opt       i, mode, value(optional)
// mode 0 => replace, 1 => remove
// names.splice(3, 1, "new value")
// const newArray = names.toSpliced(1, 1, "Apple", "KIWI", "MANGO")
// console.log(newArray)
// let str = names.toString()
// console.log(str)

// const status = Array.isArray(str)
// if(status) {
//     console.log(str)
// } else {
//     console.log("Given data isn't an array")
//     const strToArray = str.split(",")
//     console.log(strToArray)
// }

// map(), filter(), find(), reduce(), some()
const employees = [
    {id: 1, name: "Alexa", email: "alexa@email.com", salary: 20000},
    {id: 2, name: "Sam", email: "sam@email.com", salary: 70000},
    {id: 3, name: "Micheal", email: "mic@email.com", salary: 210000},
    {id: 4, name: "Freddy", email: "fredd@email.com", salary: 90000},
]

// map()
// employees.map((emp) => {
//     console.log(emp.name, emp.salary)
// })

// filter(), condition salary
// let limitStart = 30000
// let limitEnd = 300000
// const filteredEmployees = employees.filter(
//     (emp) => emp.salary >= limitStart && emp.salary <= limitEnd
// )
// console.log(filteredEmployees)

// find(), condition id
// let userId = 1
// const employee = employees.find((emp) => emp.id == userId)
// if (employee) {
//     console.log(employee)
// } else {
//     console.log("Employee not found")
// }


// reduce ()
// let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0)
// console.log("Pending payable: ", totalSalary)