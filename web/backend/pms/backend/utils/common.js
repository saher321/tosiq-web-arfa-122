import { customAlphabet } from 'nanoid'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const generateCode = () => {
    const nanoid = customAlphabet('1234567890ABCDEF', 8)
    const code = nanoid() //=> "4F9013D2"
    return code
}

export const sendEmail = async ( receiver, subject, content ) => {
    try {
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"PMS" <${process.env.SMTP_USER}>`, // sender address
            to: receiver, // list of recipients
            subject: subject, // subject line
            html: content, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return true
    } catch (err) {
        console.error("Error while sending mail:", err);
    }
}