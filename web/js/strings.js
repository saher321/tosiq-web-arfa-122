// METHODS
// 1. concat()
    // merge text
    
// 2. trim()
    // remove extra space :: Hello      world => Hello world

// 3. length()
    // total count

// 4. toLowerCase()
    // changes text transfrom

// 5. toUpperCase()
    // changes text transfrom

// 6. split()
    // let list = "fruits,vegetables,wearing"

// 7. includes()
    // let useremail = "myemail@gmail.com"
    // includes("@") true/false

// 8. startsWith()
    // let website_url = "https://porfolio.me/"
    // website_url.startsWith("https://")

// 9. endsWith()
    // useremail.endsWith(".com") true/false

// 10. slice(), substring()
// let str = "Graps are sour"
// slice(0,5) => Graps

// _____________________________________

let greetings       = "Good Morning"
let str2            = "Hello world"
let greetings_Extra = "            Good Morning"
let useremail       = "myemail@gmail.com"
let data            = "foods,wearing,sports,shoes"
let url             = "https://website.com"
let wrongUrl        = "http:/website.com"
let halfUrl         = "facebook"
// let result   = greetings.concat(" ",str2)
// let result   = `${greetings} ${str2} Extra code`
// let result   = greetings + " " + str2
// console.log(result)
// let result = greetings.length
// console.log(result)

// let orignalText = greetings.length
// let extraText = greetings_Extra.length
// let trimmedText = greetings_Extra.trim()
// console.log(orignalText, extraText, trimmedText.length)

// let result = greetings.toLowerCase()
// let result = greetings.toUpperCase()
// console.log(result)

// let list = data.split(",")
// console.log(list)
// let userToken = "Bearer eythihshfhfwhewfwef.ew23d323d23d2.d23d23d232.332d"
// let token = userToken.split(" ")[1]
// console.log(token)

// let serverDateTime = "2026-09-05T05:37:43.953+00:00"
// let time = serverDateTime.split("T")[1].split(".")[0]
// console.log(time)

// let isValid = useremail.includes("@")
// console.log(isValid)

// let checkUrl = url.startsWith("https://")
// console.log(checkUrl)
// if (checkUrl) {
//     console.log("Url is fine")
// } else {
//     console.log("Url is wrong")
// }

// let isValid = halfUrl.startsWith("https://")
if (halfUrl.startsWith("https://") && halfUrl.endsWith(".com")) {
    console.log(halfUrl)
} else {
    console.log("Url is broken")
    let appendUrl = "https://" + halfUrl + ".com"
    console.log("Url has been set", appendUrl)
}