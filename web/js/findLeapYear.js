function findLeapYear() {
    var year = Number(document.getElementById("year").value)

    if (year % 4 == 0) { // true
        console.log("It is leap year")
    } else { // false
        console.log("It is not leap year")
    }
}