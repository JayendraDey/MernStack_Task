import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { router } from "./router/authRouter.js"
import { connectToDataBase } from "./connectToMongodb/dbconnect.js"
import { ProductRouter } from "./router/productRouter.js"
dotenv.config()
const db_url = process.env.MONGO_URL

const PORT = process.env.PORT || 9001
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json())
app.use('/auth' , router)
app.use('/products' , ProductRouter)

connectToDataBase(db_url)






app.listen(PORT , ()=>{
    console.log(`server is starting at port no ${PORT}`)
})