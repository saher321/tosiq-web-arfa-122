import express from 'express'
import dotenv from 'dotenv'


dotenv.config()
const app = express()
const PORT= process.env.PORT

app.get("/check", (req, res) => {
    return res.send({ status: true, message: "Server is running..." })
})

app.listen(PORT, () => {
    console.log(`Server is started at http://localhost:${PORT}`)
})