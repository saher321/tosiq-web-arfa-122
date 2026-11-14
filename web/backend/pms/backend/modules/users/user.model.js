import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        default: null
    },
    isOtpVerified: {
        type: String,
        default: false
    },
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User