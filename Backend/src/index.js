import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import express from "express"
//const express = require("express");
const app = express();
dotenv.config({
    path: './env'
})

//load config from env file
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server Started Successfuly at, ${PORT}`);
})

//default route
app.get("/", (req, res) => {
    res.send(`<h1> This is HOMEPAGE Aman poddar</h1>`);
})

//Db connection call
connectDB()