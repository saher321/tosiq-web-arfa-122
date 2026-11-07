import express from 'express'
import { addUser, getAllUsers, deleteUser, getSingleUser } from './user.controller.js'

const userRouter = express.Router()

userRouter.get("/users", getAllUsers)
userRouter.post("/users/add", addUser)
userRouter.delete("/users/delete/:id", deleteUser)
userRouter.get("/users/edit/:id", getSingleUser)

export default userRouter