import express from 'express'
import { addUser, getAllUsers, deleteUser } from './user.controller.js'

const userRouter = express.Router()

userRouter.get("/users", getAllUsers)
userRouter.post("/users/add", addUser)
userRouter.delete("/users/delete/:id", deleteUser)

export default userRouter