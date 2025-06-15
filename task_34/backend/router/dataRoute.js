import express from "express"
import { getUserData, submmitData } from "../controller/postGet.js"


export const dataRouter = express.Router()


dataRouter.post('/submit' , submmitData)
dataRouter.get('/getdata' , getUserData)


