import express from "express"
import { login } from "../controller/login.js"
import { signup } from "../controller/signup.js"


export const authRouter = express.Router()


authRouter.post('/login' , login)
authRouter.post('/signup' , signup)



