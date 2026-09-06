function findLeapYear() {
    var year = Number(document.getElementById("year").value)

    if (year == 0) {
        alert("Please fill the field")
        return;
    }
    
    var result = document.getElementById("result")
    if (year % 4 == 0) { // true
        result.innerText = "It is leap year"
    } else { // false
        result.innerText = "It is not leap year"
    }

}
