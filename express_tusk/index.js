import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { router } from "./UserRouter.js";
//get , post , put , delete
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 7000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/Todo_app/v1",router)  

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});


app.listen(PORT, () => {
  console.log(`server is running at ${PORT} `);
});


