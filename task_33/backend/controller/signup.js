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

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

 
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const users = await readUsersFromFile();

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      _id: Date.now().toString(), 
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);
    await writeUsersToFile(users);

    res.status(201).json({
      message: "User created successfully",
      success: true,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
};
