import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { router } from "./UserRouter.js";


//get , post , put , delete
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let arr = [];
//add Todo
export const setTodo = async (req, res) => {
 const { todo } = req.body;
  const newTodo = {
    todo,
    id: Date.now(),
  };

  arr.push(newTodo);

 
  
 
   res.json(arr)
};

//get todo
 export const getTodoData = async (req, res) => {
 
  res.json(arr);
};

//Delete todo

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  arr = arr.filter((todo) => todo.id !== Number(id)); // fix type mismatch

  res.json({
    success: true,
    data: arr,
    message: `Todo with id ${id} deleted`,
  });
};