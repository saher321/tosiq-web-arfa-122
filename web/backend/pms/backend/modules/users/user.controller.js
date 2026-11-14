import bcrypt from 'bcryptjs'

import User from "./user.model.js"
export const register = async (req, res) => {
    const { fullname, email, password } = req.body
    
    if (!fullname || !email || !password) {
        return res.send({ status: false, message: "Fill all remaining fields" })
    }
    
    try {
        const user = await User.findOne({ email: email })
        if (user) {
            return res.send({
                status: false,
                message: "Email already exist, try new one"
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const newUserObj = { 
            fullname: fullname,
            email: email,
            password: hashPass
        }

        const newUser = await User.create(newUserObj)

        if (newUser) {
            return res.send({
                status: true,
                message: "User has been created"
            })
        }

        return res.send({
            status: false,
            message: "Failed to create an account"
        })

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {}

export const forgotPassword = async (req, res) => {}

export const resetPassword = async (req, res) => {}