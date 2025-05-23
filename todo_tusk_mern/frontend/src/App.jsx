import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { deleteTodoo, getAllTodo, saveTodos, updateTodoo } from "./utils/Handle_api";


function App() {
  const [inp, setInp] = useState("");
  const [todo, setToodo] = useState();
  const [todoId , setTodoId] = useState();
  const [update ,setUpdate] = useState(false)

  useEffect(() => {
    getAllTodo(setToodo)
    
  }, []);

 
  

  return (
    <div className="App">
      <div className="inp_div">
        <input value={inp} onChange={(e)=> setInp(e.target.value)} />
        <button onClick={() => {update? updateTodoo(todoId , inp , setInp , setToodo ,setUpdate) : saveTodos(inp, setInp , setToodo)}}>{update? "Save" : "Add todo"}</button>
      </div>

     

      {todo?.map((item,i) => {
        return (
          <React.Fragment key={item._id}>
            <div className="TodoAllData">
              <div className="todo">
                <span>{i+1}.</span>
                <p>{item.text}</p>
                <button onClick={()=> (setUpdate(true) , setTodoId(item._id) , setInp(item.text))}>Edit</button>
                <button  onClick={()=> deleteTodoo(item._id , setToodo)}>Delete</button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
