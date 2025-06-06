import path from "path";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFilePath = path.join(__dirname, "../data/user.json");

// Utility to read users
const readUsersFromFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeUsersToFile([]); // Create file if not found
      return [];
    }
    throw err;
  }
};

// Utility to write users
const writeUsersToFile = async (users) => {
  await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2));
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required", success: false });
    }

    if (!process.env.JWT_SIGNATURE) {
      return res.status(500).json({ message: "JWT secret not configured", success: false });
    }

    const users = await readUsersFromFile();

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password", success: false });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(401).json({ message: "Invalid email or password", success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SIGNATURE,
      { expiresIn: "24h" }
    );

    // Set JWT in HttpOnly cookie with cross-origin friendly options
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: true,       // must be true for HTTPS (Render uses HTTPS)
      sameSite: "none",   // allows cross-site cookie
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: "/",
    });

    res.status(200).json({
      message: "Login successful",
      success: true,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
