import path from "path";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFilePath = path.join(__dirname, "../data/user.json");


const readUsersFromFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeUsersToFile([]); 
      return [];
    }
    throw err;
  }
};


const writeUsersToFile = async (users) => {
  await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2));
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;


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


    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: true,      
      sameSite: "none",   
      maxAge: 24 * 60 * 60 * 1000, 
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
