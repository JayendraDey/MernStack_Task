import express from'express';
import cors from'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
import { addTodo, deleteTodo, getTodo } from './userController.js';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express();
const PORT = 7000;

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')))


 let todos = [];


// Get all todos
app.get('/todos', getTodo);

// Add a todo
app.post('/todos',addTodo);

// Delete a todo
app.delete('/todos/:id', deleteTodo);


//create a server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});