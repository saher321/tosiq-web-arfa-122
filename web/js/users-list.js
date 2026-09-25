const users = [
    {id: 1, name: "Alexa", email: "alexa@email.com", salary: 20000, status: "inactive"},
    {id: 2, name: "Sam", email: "sam@email.com", salary: 70000, status: "active"},
    {id: 3, name: "Micheal", email: "mic@email.com", salary: 210000, status: "active"},
    {id: 4, name: "Freddy", email: "fredd@email.com", salary: 90000, status: "active"},
]

showUsers(users)
function showUsers(users) {
    let usersTbl = document.getElementById("users-tbl")
    users.map((user) => {
        usersTbl.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.salary}</td>
            <td>${user.status}</td>
        </tr>
        `
    })
}

function getFilteredUsers() {
    let status = document.getElementById("status").value
    let usersTbl = document.getElementById("users-tbl")
    usersTbl.innerHTML = ""

    if (status == "all"){
        showUsers(users)
    } else {
        const filteredUsers = users.filter((user) => user.status == status)
        showUsers(filteredUsers)
    }
}