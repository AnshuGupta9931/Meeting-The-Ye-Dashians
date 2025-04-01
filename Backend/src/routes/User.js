// Import the required modules
import express from "express"
const router = express.Router()

// Import the required controllers and middleware functions
import { login, signup, sendOTP, changePassword } from "../controllers/Auth.js";

import {auth} from "../middlewares/auth.js"

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP)

// Route for Changing the password
router.post("/changepassword", auth, changePassword)

export default router;
