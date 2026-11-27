import express from 'express'
import { addCustomer, allCustomers } from './customer.controller.js'

const customerRouter = express.Router()
// http://localhost:3000/api/v1/customers
customerRouter.get("/customers", allCustomers)
customerRouter.post("/customers/add", addCustomer)

export default customerRouter