import express from "express"
import { createUser, getAllUsers } from "../controllers/userController.js";


export const userRouter = express.Router();

userRouter.post("/users", createUser);
userRouter.get("/users" , getAllUsers)


