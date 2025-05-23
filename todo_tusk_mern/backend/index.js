import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { router } from "./routes/todo_route.js"
dotenv.config()
const PORT = process.env.port ||  9000

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)








mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("connected to mongodb"))
.catch((err)=> console.log(err))








app.listen(PORT , ()=>console.log(`sever is runing at ${PORT}` ))
















