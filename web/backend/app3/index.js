import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

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