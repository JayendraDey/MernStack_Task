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


// Update todo
export const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;

  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos[index].text = text;
  res.status(200).json(todos[index]);
};