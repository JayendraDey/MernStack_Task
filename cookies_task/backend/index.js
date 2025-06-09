import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { cookiesRouter } from "./roter.js";

const PORT = 9000
const app = express()



app.use(cors({
  origin: 'https://mernstack-task-4-cookie-f.onrender.com',
  credentials: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cookieParser());
app.use("/", cookiesRouter)













app.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`)
})











