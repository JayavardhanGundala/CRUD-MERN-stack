import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emai:{
        type:String,
        required:true
    },
    address:{
        type:String,
        requird:true
    }
})
const user=mongoose.model("user",userSchema)
export default user