import Router from "express"
import { deleteTodo, getTodo, setTodo, updateTodo } from "../controller/todoControler.js"


export const router = Router()


router.get("/" , getTodo )
router.post("/setTodo" , setTodo )
router.post("/update" , updateTodo)
router.post("/delete/:id" , deleteTodo)
