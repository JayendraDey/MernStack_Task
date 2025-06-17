import express from "express"
import { createPost, getPosts } from "../controllers/postController.js";


export const postRouter = express.Router();

postRouter.post("/posts", createPost);
postRouter.get("/posts", getPosts);


