import { Post } from "../models/Post.js";



export const createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;

    if (!title || !content || !user) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const saved = await Post.create({ title, content, user });
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
