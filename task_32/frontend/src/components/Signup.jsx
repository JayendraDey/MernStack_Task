import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../HandleToastify";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; 

const URL = "http://localhost:7000/auth/signup";

// const URL = "https://mernstack-task-upr4.onrender.com/auth/signup"

const Signup = () => {
  const [inp, setInp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const setInput = (e) => {
    const { name, value } = e.target;
    setInp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = inp;

    if (!name || !email || !password ) {
      return toastError("All fields are required");
    }

    try {
      const response = await axios.post(URL, inp, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { success, message } = response.data;

      if (!success) {
        return toastError(message);
      }

      toastSuccess(message);

      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      toastError(errorMsg);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "30px",
          background: "black",
          borderRadius: "8px",
          boxShadow: "0 0 10px #ccc",
          width: "300px",
          color:"white"
        }}
      >
        <h2 style={{ textAlign: "center" }}>Signup</h2>

        <input
          placeholder="Name"
          value={inp.name}
          name="name"
          onChange={setInput}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor : "black",
            color : "white"
          }}
        />
        <input
          type="email"
          value={inp.email}
          placeholder="Email"
          name="email"
          onChange={setInput}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor : "black",
            color : "white"
          }}
        />
        <input
          type="text"
          value={inp.password}
          placeholder="Password"
          name="password"
          onChange={setInput}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor : "black",
            color : "white"
          }}
        />
       
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor : "black",
            color : "white",
             boxShadow: "0 0 3px #ccc",
          }}
        >
          Sign Up
        </button>
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
