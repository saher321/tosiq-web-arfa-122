import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        console.log("Database is connecting...")
        const db = await mongoose.connect(process.env.MONGODB_URL)

        if (db) {
            console.log("Database is connected:", db.connection.name)
        }
    } catch (error) {
        console.log("Failed to connect database")
        console.log(error)
    }
}

export default connectDB