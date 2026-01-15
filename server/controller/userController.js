import {user} from "../Model/userModel.js";
export const create=async (req,res)=>{
    try{
        const newuser=new user(req.body)
        const {email}=newuser
        const userExist=await user.findOne({email})
        if(userExist){
            return res.status(400).json({msg:"User exists"})
        }
        const saveData=await newuser.save()
        res.status(200).json(saveData)

    }
    catch(error){
        res.status(400).json({msg:`creating user has issue with the sever ${error}`})
    }
}

export const getAllUsers=async (req,res)=>{
    try{
        const userData=await user.find()
        if(!userData || userData.length==0){
            res.status(400).json({msg:"user data not found"})
        }
        res.status(200).json(userData)

    }
    catch(error){
        res.status(500).json({msg:`cant get the all the users ${error}`})
    }

}

export const getUserById=async (req,res)=>{
    try{
        const id=req.params.id;
        const userExsist=await user.findById(id)
        if(!userExsist){
            res.status(400).json({msg:"user data not found"})
        }
        res.status(200).json(userExsist)

    }
    catch(error){
         res.status(500).json({msg:`cant get the all the user ${error}`})
    }
}

export const updateData=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExsist=await user.findById(id)
        if(!userExsist){
            res.status(400).json({msg:"user data not found"})
        }
        const data=await user.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.status(200).json({data})

    }
    catch(error){
        res.status(500).json({msg:`cant get the all the user ${error}`})
    }
}
