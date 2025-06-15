import express from "express";
import bodyParser from "body-parser";
import { dataRouter } from "./router/dataRoute.js";
import { configDotenv } from "dotenv";
import { connectToDB } from "./database/connectToAtlus.js";
import cors from "cors"

configDotenv();

const PORT = 8080;
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectToDB(process.env.DB_url)


app.use("/", dataRouter);

app.listen(PORT, () => {
  console.log(`server is running at : ${PORT}`);
});
