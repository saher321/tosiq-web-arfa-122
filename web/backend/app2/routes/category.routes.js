import express from 'express'
import { allCategories } from '../controllers/category.controller.js'

const categoryRouter = express.Router()

// url  => routes,    fn => controllers
categoryRouter.get('/categories', allCategories)

export default categoryRouter