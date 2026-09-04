// alert(1+1)

// console.log(1 + 1);

var age = 25;
var name = "Tosiq";
var accountStatus = false; // camelCase
var account_balance = true; // snake_case
// console.log(account_balance)
//  object    key    value
var user = {
  name: "Asad",
  email: "asad@email.com",
  birthMark: null,
  // birthMark: { place: "chin", color: "black" }
}; // curly bracket
// console.log(user.email)
var d = new Date()
// console.log(d.getDay(), d.getDate(), d.getMonth()+1, d.getFullYear());

var colors = ["Purple", "Pink", "Black", "White"]

console.log(colors)
console.log(colors[3])

// const matrix = [
//   [1, 2, 3], // Row 0
//   [4, 5, 6], // Row 1
//   [7, 8, 9]  // Row 2
// ];

// console.log(matrix[2][2])

showData()
function showData () {
  console.log(name, age)
}

var validateEmail = /^\S+@\S+\.\S+$/

