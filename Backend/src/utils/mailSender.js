import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,  // Should be smtp.gmail.com for Gmail
            port: process.env.MAIL_PORT,  // Port 465 or 587
            secure: process.env.MAIL_SECURE === "true",  // true for SSL, false for TLS
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false  // This disables certificate validation
            }
        });

        let info = await transporter.sendMail({
            from: `"Meeting App" <${process.env.MAIL_USER}>`,  // Use the user from environment variable
            to: email,
            subject: title,
            text: "Your email client does not support HTML. Please enable HTML view.",
            html: body,  // Pass `body` directly
        });

        console.log(info);
        return info;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};
