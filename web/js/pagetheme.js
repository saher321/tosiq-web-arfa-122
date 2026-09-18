// localstorage.setItem("bgClr", clr) => store data in ls
// localstorage.getItem("bgClr") => get data from ls
// localstorage.removeItem("bgClr") => remove specific data from ls
// localstorage.clear() => remove all data from ls

// apply func() to show clrs
applyTheme()
function applyTheme () {
    let clr = localStorage.getItem("bgClr")
    if (clr) {
        document.body.style.backgroundColor = clr
    } else {
        console.log("Not clr has been assign yet")
    }
}

function saveTheme(clr){

    // clear bg clr
    if (clr == 'clear') {
        localStorage.removeItem("bgClr")
        document.body.style.backgroundColor = ""
    }

    document.body.style.backgroundColor = clr

    // store bg clr
    // localStorage.setItem("key", value)
    localStorage.setItem("bgClr", clr)
}