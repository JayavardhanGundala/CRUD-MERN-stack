import {create,getAllUsers} from "../controller/userController.js";
import express from"express"
 export const route =express.Router()
 route.post("/user",create)
 route.get("/users",getAllUsers)




