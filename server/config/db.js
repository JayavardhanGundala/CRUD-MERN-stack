import mongoose from "mongoose";
export const connectDb=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.Mongo_URL)
    console.log(`database connected at ${conn.connection.host}`)
    }
    catch(err){
        console.log(`connection to databases failed${err}`)
        process.exit(1)
    }

}