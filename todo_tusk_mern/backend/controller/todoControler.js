import { Todos } from "../mongodb/models/todoModel.js";

//get the all todo array
export const getTodo = async (req, res) => {
  try {
    const todoArr = await Todos.find();
    res.send(todoArr);
  } catch (error) {
    console.log(error.message);
  }
};

// save the new todo
export const setTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await Todos.create({ text });
    console.log("saved data :", data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save todo" });
  }
};

//update  todo
export const updateTodo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    const data = await Todos.findByIdAndUpdate(_id, { text });
    res.status(200).send("Update todo successfully", data);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

//delete todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Todos.findByIdAndDelete(id);
    res.status(200).json("delete todo successfully", data);
 
} catch (error) {

    res.status(500).json({ error: "Failed to delete todo" });

}
};
