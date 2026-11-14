import express from 'express'
import dotenv from 'dotenv'
import userRouter from './modules/users/user.routes.js'
import cors from 'cors'
import connectDB from './config/db.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT
const PREFIX = "/api/v1"

app.use(PREFIX, userRouter)

app.get("/check", (req, res) => {
    return res.send({ status: true, message: "Server is running..." })
})


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is started at http://localhost:${PORT}`)
    })
})