import express from "express";
import { getTodoData, setTodo  } from "./userController.js";


const app = express();

export const router = express.Router()

router.route("/todo_data" ).post(setTodo).get(getTodoData)





