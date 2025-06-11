import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { cookiesRouter } from "./roter.js";

const PORT = 9000;
const app = express();


app.use(cors({
  origin: "https://mernstack-task-4-cookie-f.onrender.com",
  credentials: true, 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/", cookiesRouter);
app.get("/success", (req, res) => {
  res.status(200).json({ message: "Request successful", status: 200 });
});


app.post("/create", (req, res) => {
  const data = req.body;
  res.status(201).json({ message: "Resource created", data });
});

app.get("/unauthorized", (req, res) => {
  res.status(401).json({ error: "Unauthorized access" });
});


app.get("/not-found", (req, res) => {
  res.status(404).json({ error: "Resource not found" });
});


app.get("/server-error", (req, res) => {
  res.status(500).json({ error: "Internal server error" });
});


app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
