import express from 'express'
import { register } from './user.controller.js'

const userRouter = express.Router()

userRouter.post("/auth/register", register)

export default userRouter