import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
const URL = "https://userdatabackend.onrender.com";                      //copied from render
const UserForm = () => {
  const [inp, setInp] = useState({ name: "", email: "", password: "" });
  const [userData, setUserData] = useState(null);
  const [res_data , setRes_data] = useState(null)

  const handleChang = (e) => {
    const { name, value } = e.target;
    setInp((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    const { name, email, password } = inp;
    if (name && email && password) {
      setUserData(inp);

      setInp({ name: "", email: "", password: "" });
    } else {
      alert("input field can not be empty");
    }
  };

  useEffect(() => {
    if (userData) {
       axios
        .post(URL, userData)
        .then((res) => {
          console.log("Data posted:", res.data.data);
          setRes_data(res.data.data)
        })
        .catch((err) => {
          console.error("Error posting data:", err);
        });
    }
  }, [userData]);

  useEffect(() => {
    if (userData) {
    const time = setTimeout(() => {
      setRes_data(null);
    }, 5000);
    return () => clearTimeout(time); 
  }
  }, [userData]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap:"50px"
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "70%",
          backgroundColor: "white",
          marginLeft: "10px",
          boxShadow: "1px 1px 15px  white",
          backgroundColor: " rgb(0, 0, 0)",
          borderRadius: "15px",
        }}
      >
        <div className="input_field">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => handleChang(e)}
            name="name"
            id=""
            value={inp.name}
          />
        </div>
        <div className="input_field">
          <label htmlFor="">email</label>
          <input
            type="text"
            onChange={(e) => handleChang(e)}
            name="email"
            id=""
            value={inp.email}
          />
        </div>
        <div className="input_field">
          <label htmlFor="">password</label>
          <input
            type="text"
            onChange={(e) => handleChang(e)}
            name="password"
            id=""
            value={inp.password}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>


      {res_data &&   <div style={{color : "white"}}>
        <p style={{color :"red"}}>It will be gone after 5 seconds</p>
        <h2> Name : {userData?.name}</h2>
         <h2> Email : {userData?.email}</h2>
          <h2> Password : {userData?.password}</h2>
      </div>}
    </div>
  );
};

export default UserForm;
