import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"; // ✅ Needed for /auth/check
import { authRouter } from "./authRouter/authRouter.js";

dotenv.config();
const PORT = process.env.PORT || 5500;
const app = express();

// ✅ Enable CORS with credentials for frontend at localhost:3000
app.use(cors({
  origin: "http://localhost:3000", // React app
  credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Routes
app.use("/auth", authRouter);

// ✅ Auth Check Route (to verify cookie token)
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

// ✅ Logout
app.get("/auth/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: "lax", // or "none" if cross-site
  });
  return res.status(200).json({ success: true, message: "Logged out" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
