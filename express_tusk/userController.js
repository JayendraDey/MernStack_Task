let todos = [];

//get all todo
export const getTodo = (req, res) => {
  res.json(todos);
};

//add todo
export const addTodo = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const newTodo = { id: Date.now(), text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
}

//delete todo
export const deleteTodo = (req, res)=>{
  const id = parseInt(req.params.id)
  todos = todos.filter((item)=> item.id !== id)
  res.status(200).json({success : true})
}
