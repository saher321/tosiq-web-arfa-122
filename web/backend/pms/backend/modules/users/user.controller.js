import bcrypt from 'bcryptjs'
import User from "./user.model.js"
import { generateCode, sendEmail } from '../../utils/common.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

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

export const login = async (req, res) => {
    const { email, password } = req.body
    
    if (!email || !password) {
        return res.send({ status: false, message: "Fill all remaining fields" })
    }
    
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.send({
                status: false,
                message: "Account not found!"
            })
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if(!isMatched) {
            //login
            return res.send({
                status: false,
                message: "Password is incorrect!"
            })
        }
        const userObj = { id: user._id, fullName: user.fullname, email: user.email, isAdmin: user.isAdmin }
        const token = jwt.sign(
            userObj, 
            process.env.SECRETE_KEY, 
            { expiresIn: "7d" }
        );
        return res.send({
            status: true,
            loggedInUser: userObj,
            userToken: token,
            message: "Loggedin successfull!"
        })

    } catch (error) {
        console.log(error)
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body
    
    if (!email) {
        return res.send({ status: false, message: "Email is required" })
    }
    
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.send({
                status: false,
                message: "User not found!"
            })
        }

        const otp = generateCode()
        const subject = "PMS: RESET PASSWORD OTP 🔐"
        const content = `
        Your request otp has been shared with you only:
        <h2> ${otp} </h2>

        <small> <strong> Note: Please dont share this OTP to anyone </strong> </small>
        `
        const status = await sendEmail(user.email, subject, content)
        if (status) {
            user.otp = otp
            user.isOtpVerified = false
            user.save()

            return res.send({
                status: true,
                message: "Otp has been sent to your email"
            })

        }

        return res.send({
            status: false,
            message: "Failed to send otp"
        })

    } catch (error) {
        console.log(error)
    }
}

export const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body
    
    if (!otp || !newPassword) {
        return res.send({ status: false, message: "Remaining fields are required" })
    }
    
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.send({
                status: false,
                message: "User not found!"
            })
        }

        if (otp != user.otp) {
            return res.send({
                status: false,
                message: "Invalid otp, try again!"
            })
        } else{
            const salt = bcrypt.genSaltSync(10);
            const hashPass = bcrypt.hashSync(newPassword, salt);
            user.otp = null
            user.password = hashPass
            user.isOtpVerified = true
            user.save()
            return res.send({
                status: true,
                message: "Your password has been reset"
            })
        }

    } catch (error) {
        console.log(error)
    }
}