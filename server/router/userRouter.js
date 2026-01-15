import {create,getAllUsers,getUserById,updateData} from "../controller/userController.js";
import express from"express"
 export const route =express.Router()
 route.post("/user",create)
 route.get("/users",getAllUsers)
route.get("/user/:id",getUserById)
route.put("/user/update/:id",updateData)




