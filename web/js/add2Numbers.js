function addNumbers() {
    var a = Number(document.getElementById("no1").value)
    var b = Number(document.getElementById("no2").value)
    
    var res = document.getElementById("result")
    var hed = document.getElementById("heading")
    
    var sum = a + b

    res.innerText = "Sum is: " + sum
 

    console.log("Extracted heading from H1 tag", hed.innerText)
}