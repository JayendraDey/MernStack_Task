import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const url = "https://mernstack-task-34-backend.onrender.com/submit";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
  });

  const [blink , setBlink] = useState(true)


  useEffect(()=>{
    const time = setInterval(()=>{
      setBlink((prev)=> !prev)
    },500)
    
    return ()=> clearInterval(time)
  })

  const [dbData, setDbData] = useState([]);

  async function getUserData() {
    try {
      const data = await axios.get("https://mernstack-task-34-backend.onrender.com/getdata", {});

      console.log(data.data.userData);
      setDbData(data.data.userData);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUserData();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formData);
      console.log("Response:", response.data);
      setFormData({
        name: "",
        email: "",
        phoneno: "",
      });
    } catch (error) {
      alert(error.response?.data.message);
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: "#f9f9f9",
        overflow: "hidden",
        gap: "20px",
        
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "30px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          width: "40%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", margin: 0 }}>User Form</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            style={{ padding: "8px" }}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            style={{ padding: "8px" }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneno"
            style={{ padding: "8px" }}
            value={formData.phoneno}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
          padding: "30px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          width: "50%",
          height: "80vh",
          overflowY: "scroll",
          overflowX: "hidden",
          wordBreak: "break-word",
          position : "relative" 
        }}    
      >
        <p style={{position : "fixed" , top : "0" , color : blink? "red" : "orange" , fontWeight : "600"}}>Getting data form MongoDB</p>
        {dbData?.map((item , i) => {
          return (
            <div  key={item._id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                width: "88%",
                height: "40%",
                paddingLeft : "40px"
              }}
            >
              <h3>{`Name : ${item.name}`}</h3>
              <h3>{`Email : ${item.email}`}</h3>
              <h3>{`Phone no : ${item.phoneno}`}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
