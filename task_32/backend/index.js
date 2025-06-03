import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { authRouter } from "./authRouter.js/autHRouter.js"
dotenv.config()

const PORT =  process.env.PORT || 7000
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use("/auth" , authRouter)














app.listen(PORT , ()=>{
    console.log(`🚀 server is running at ${PORT} `)
})