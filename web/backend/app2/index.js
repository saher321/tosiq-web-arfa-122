import express from 'express'
import categoryRouter from './routes/category.routes.js'

const app   = express()
const PORT  = 3000


app.use(categoryRouter)

app.get('/', (req, res) => {
    return res.send({
        status: true,
        message: "Server is running"
    })
})

app.listen(PORT, () => {
    console.log(`Server is started at http://localhost:${PORT}`)
})