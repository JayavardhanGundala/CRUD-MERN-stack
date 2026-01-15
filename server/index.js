import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"
dotenv.config()
const PORT=process.env.PORT ||5000
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({msg:"server running"})
})
connectDb()
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})
