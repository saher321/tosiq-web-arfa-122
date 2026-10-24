import express from 'express'

const app = express()
const port = 3000


app.get('/', (req, res) => {
    return res.send({
        status: true,
        message: "Server is ok"
    })
})
app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`)
})