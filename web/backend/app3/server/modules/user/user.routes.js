import express from 'express'
import { addUser, getAllUsers } from './user.controller.js'

const userRouter = express.Router()

userRouter.get("/users", getAllUsers)
userRouter.post("/users/add", addUser)

export default userRouter