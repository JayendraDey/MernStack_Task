import express from "express"
import { connectToDb } from "./db/connectDb.js"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import router from "./routers/filerouter.js"



dotenv.config()




const PORT = 5000;
const app = express()

connectToDb(process.env.mongo_url)

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/uploads", express.static("uploads")); 

app.use("/", router);









connectToDb(process.env.mongo_url)







app.listen(PORT , ()=>{
    console.log(`server is running at : ${PORT}`)
})

































































































