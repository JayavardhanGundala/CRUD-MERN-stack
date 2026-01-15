import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"
import {route} from "./router/userRouter.js"
dotenv.config()
const PORT=process.env.PORT ||5000
const app=express()
app.use(express.json())

connectDb()
app.use("/api",route)
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})
