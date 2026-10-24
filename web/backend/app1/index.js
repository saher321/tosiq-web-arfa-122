import express from 'express'

const app = express()
const port = 3000

const statuses = [
    {id: "processing", text: "Processing"},
    {id: "delivered", text: "Delivered"},
    {id: "pending", text: "Pending"},
    {id: "cancelled", text: "Cancelled"},
]

app.delete("/statuses", (req, res) => {
    return res.send({ 
        status: true, 
        total: statuses.length,
        statuses: statuses,
    })
})

app.get('/', (req, res) => {
    return res.send({
        status: true,
        message: "Server is ok"
    })
})

app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`)
})


// frontend (Axios) => axios.get, axios.delete, axios.post, axios.put