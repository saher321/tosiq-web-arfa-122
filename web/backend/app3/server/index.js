import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './modules/user/user.routes.js'
import cors from 'cors'

dotenv.config()
const app = express()
// Adds headers: Access-Control-Allow-Origin: *
app.use(cors())

const PORT = process.env.PORT
const PREFIX = '/api/v1'

// http://localhost:3000/api/v1/users
app.use(PREFIX, userRouter)

// http://localhost:3000/api/v1/check-health
app.get("/check-health", (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is started at http://localhost:${PORT}`)
    })
})