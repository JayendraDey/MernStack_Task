import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import bodyParser from "body-parser"
import { router } from "./routes/dataRouter.js"
import { connectTodb } from "./config/db.js"



const PORT = 8080
const app = express()



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', router);

connectTodb(process.env.mongo_url)







app.listen(PORT , ()=>{
    console.log(`server is running at : ${PORT}`)
})