import axios from "axios";

const url = "http://localhost:9000";

//get all todo array
export const getAllTodo = async (setTodo) => {
  try {
    const data = await axios.get(url);
    console.log("data from front", data);
    setTodo(data.data);
  } catch (error) {
    console.log(error.message);
  }
};

//save todo
export const saveTodos = async (inp, setInp, setTodo) => {
  try {
    if (inp.length > 0) {
      const data = await axios.post(`${url}/setTodo`, { text: inp });
      console.log("saved data from front", data);
      setInp("");
      getAllTodo(setTodo);
    }else {
      alert("🚫 Type something to add a new task.")
    }
  } catch (error) {
    console.log(error.message);
  }
};

//delete todo
export const deleteTodoo = async (id, setTodo) => {
  try {
    const data = await axios.post(`${url}/delete/${id}`);

    console.log(data);
    getAllTodo(setTodo);
  } catch (error) {
    console.log(error.message);
  }
};

//update Todo
export const updateTodoo = async (id, inp, setInp, setTodo, setUpdate) => {
  try {
     if(inp.length > 0) {
      const data = await axios.post(`${url}/update`, { _id: id, text: inp });
    console.log("updated data from front", data);
    setInp("");
    getAllTodo(setTodo);
    setUpdate(false);
     }else {
      alert("🚫 Type something to update the task.")
     }
  } catch (error) {
    console.log(error.message);
  }
};
