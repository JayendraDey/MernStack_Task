// index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { userRouter } from "./routers/userRouter.js";
import { postRouter } from "./routers/postRouter.js";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
dotenv.config()


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB(process.env.MONGO_URL)

app.use("/", userRouter);
app.use("/", postRouter);

const PORT = 8011;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
