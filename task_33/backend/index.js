import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { authRouter } from "./authRouter/authRouter.js";

dotenv.config();
const PORT = process.env.PORT || 5500;
const app = express();

const url1 = "https://mernstack-task-33-frontend.onrender.com"; // your frontend URL

app.use(cors({
  origin: url1,
  credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth", authRouter);

app.get("/auth/check", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SIGNATURE);
    return res.status(200).json({ success: true, user: decoded });
  } catch {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
});

app.get("/auth/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,       // true for HTTPS production
    sameSite: "none",   // cross-site cookie allowed
    path: "/",
  });
  return res.status(200).json({ success: true, message: "Logged out" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
