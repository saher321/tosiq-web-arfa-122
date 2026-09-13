
// declaration
// initialization
// condition
// increament / decreament
let sum = 0
for (let i = 1; i <= 100; i++) {
    // console.log(i,"I love pakistan")
    sum = sum + i
}
console.log("Total", sum)

let tblData = document.getElementById("table-data")
let y = 1
while(y <= 10) {
    // 2 x 1 = 2
    // 2 x 2 = 4
    tblData.innerHTML += `
    <tr>
        <td> 2 x ${y} = <strong> ${2*y} </strong> </td>
    </tr>
    `
    y++
}